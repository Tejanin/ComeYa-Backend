using AutoMapper;
using AutoMapper.Execution;
using ComeYa.Interfaces;
using ComeYaAPI.Context;

using ComeYaAPI.Models.DTOs.CartDTOs;
using ComeYaAPI.Models.DTOs.StripeDTOs;
using ComeYaAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Controllers;
using Stripe;
using Stripe.Checkout;
using System.Security.Claims;

namespace ComeYaAPI.Controllers
{
    [Route("ComeYa/[controller]")]
    [ApiController]
    [Authorize]
    
    public class CartController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly WebToken _webToken;
        private readonly CheckoutController _checkoutController;


        public CartController(IUnitOfWork unitOfWork,CheckoutController checkoutController,  WebToken webToken) 
        { 
            _unitOfWork = unitOfWork;
            _webToken = webToken;
            _checkoutController = checkoutController;
        }

        [HttpGet]
        [Route("CartItems")]
        public async Task<ActionResult<ICollection<ShowCartItemDTO>>> GetAllCartItems(int page =1) 
        {
            

            var authTokenUserId = _webToken.ValidateTokenUserId(User);
            if(authTokenUserId == 0) return Unauthorized();
            int userId = authTokenUserId;
            var cartItemDTOList = await _unitOfWork.Cart.GetCartItems(userId, page);
            return Ok(cartItemDTOList.Entity);
            

            /* if(authTokenUserId != 0)
             {

             }
             return Unauthorized("No autorizado. Inicie sesion.");*/


        }

        [HttpPost]
        [Route("AddItem")]
        public async Task<ActionResult<ICollection<ShowCartItemDTO>>> AddItem([FromBody] AddCartItemDTO itemDTO)
        {
            itemDTO.AssignUserId(User);
            int id = _webToken.ValidateTokenUserId(User);
            var firstCartItem = await _unitOfWork.Cart.FindIncluding<Cart>(u=> u.UserId == itemDTO.UserId,
                x=> x.Item);
            if (await _unitOfWork.Cart.CheckIfEmpty(id)== false) 
            { 
                int restaurant = firstCartItem.Item.RestaurantId;
                var item = await _unitOfWork.Items.FindAsync(i => i.Id == itemDTO.ItemId);
                if (restaurant != item.RestaurantId)
                {
                    return BadRequest("Todos los articulos del carrito deben proveenir del mismo local.");
                }
            }

            
            
           
                _unitOfWork.BeginTransaction();
                try
                {
                    await _unitOfWork.Cart.AddCartItem(itemDTO);
                    await _unitOfWork.Complete();
                    var result = await _unitOfWork.Cart.GetCartItems(itemDTO.UserId);
                    return Ok(result.Entity);
                }
                catch (Exception ex)
                {
                    _unitOfWork.Rollback();
                    return BadRequest(ex);
                }
            
            
            
        }

        [HttpPatch]
        [Route("UpdateQty")]
        public async Task<ActionResult<Cart>> ChangeQty([FromBody] UpdateQtyDTO qty )
        {
            qty.AssignUserId(User);
            try
            {
                _unitOfWork.BeginTransaction();
                await _unitOfWork.Cart.UpdateQty(qty);
                await _unitOfWork.Complete();
            }
            catch (Exception ex)
            {
                _unitOfWork.Rollback();
            }


           
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteItem")]
        public async Task<ActionResult> DeleteItem([FromBody] DeleteCartItemDTO itemDTO)
        {
            itemDTO.AssignUserId(User);
            try
            {
                _unitOfWork.BeginTransaction();
               await _unitOfWork.Cart.DeleteItem(itemDTO);
               await  _unitOfWork.Complete();

                return Ok();

            }
            catch (Exception ex)
            {
                _unitOfWork.Rollback();
                return BadRequest(ex);
            }
        }

        [HttpDelete]
        [Route("DeleteAllItems")]
        public async Task<ActionResult> DeleteAllItems()
        {
            int id = _webToken.ValidateTokenUserId(User);
            try
            {
                _unitOfWork.BeginTransaction();
                await _unitOfWork.Cart.DeleteAllItems(id);
                await _unitOfWork.Complete();

                return Ok();

            }
            catch (Exception ex)
            {
                _unitOfWork.Rollback();
                return BadRequest(ex);
            }
        }

        [HttpPost]
        [Route("PurchaseOrderStripe")]
        public async Task<ActionResult<string>> PurchaseOrderStripe()
        {
            int id = _webToken.ValidateTokenUserId(User);
            var items = await _unitOfWork.Cart.GetCartItems(id);
            
            try
            {
                var checkoutResponse =await _checkoutController.CheckoutOrder(items.Entity);
  
                return Ok(checkoutResponse.Value.url);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
                
            }
            
           
        }

       /* [HttpPatch]
        [Route("PurchaseOrderWithBalance")]
        public async Task<ActionResult> PurchaseOrderWithBalance()
        {

        }*/

        




    }
}
