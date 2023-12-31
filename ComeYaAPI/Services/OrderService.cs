using ComeYa.Interfaces;
using ComeYaAPI.Context;
using ComeYaAPI.Models.DTOs.CartDTOs;

namespace ComeYaAPI.Services
{
    public class OrderService
    {
        private readonly IUnitOfWork _unitOfWork;
        public OrderService(IUnitOfWork unitOfWork) { 
            _unitOfWork = unitOfWork;
        }

        public async Task<int> AddOrder()
        {

            Guid uniqueGuid = Guid.NewGuid();
            string code = $"ORDER-hukbk";
            var order = new Order { OrderCode = code };

            
            await _unitOfWork.Orders.AddAsync(order);
            await _unitOfWork.Complete();
           
            
            var insertedOrder = await _unitOfWork.Orders.GetOrder(code);
            return insertedOrder.Id;
        }

        public async void AddOrderItem(int orderId, int userId, IEnumerable<ShowCartItemDTO> items)
        {
            List<OrderItem> orderItems = new();
            
            foreach (var item in items)
            {
                orderItems.Add(new OrderItem
                {
                    OrderId = orderId,
                    ItemId = item.Id,
                    Amount = item.Amount
                });

            }
            
                await _unitOfWork.OrderItem.AddRangeAsync(orderItems);
               await _unitOfWork.SaveChangesAsync();
            
           
            
        }

        public async void AddOrderHistory(int userId, int orderId)
        {
            var order = new OrderHistory { OrderId = orderId, UserId= userId };
            await _unitOfWork.OrderHistory.AddAsync(order);
        }

        public async void AddBill(string receiptUrl, int orderId, int userId)
        {
            Guid uniqueGuid = Guid.NewGuid();
            string code = $"BILL-gmcg";
            var bill = new Bill
            {
                OrderId = orderId,
                UserId = userId,
                Url = receiptUrl,
                BillCode = code
            };
            await _unitOfWork.Bills.AddAsync(bill);
        }
    }
}
