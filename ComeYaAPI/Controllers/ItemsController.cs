using ComeYa.Interfaces;
using ComeYaAPI.Context;
using ComeYaAPI.Models.DTOs.ItemDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ComeYaAPI.Controllers
{
    [Route("ComeYa/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ItemsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // Metodo Get para mostrar todos los items
        [HttpGet]
        
        public async Task<ActionResult<IEnumerable<ReadItemDTO>>> GetAllItems(string? type, decimal price= 0M, int page=0, ulong combo=2 )
        {
           
            var items = await _unitOfWork.Items.GetAllItems(type,price,page,combo);
           
            return Ok(items.Entity);

            
            
        }
        // Metodo Get para mostrar los combos (filtro: Precio, FoodType, Restaurante)
        // Metodo Get por tipo de comida (Hambuerguesa, Pizza, ...)(filtro: Precio, FoodType, Restaurante)
        // Metodo Get por categoria de comida (Si es Vegana o no) (filtro: Precio, FoodType, Restaurante)
        // Metodo Get por restaurante 
    }
}
