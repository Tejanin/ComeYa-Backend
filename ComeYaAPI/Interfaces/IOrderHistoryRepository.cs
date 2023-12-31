using ComeYa.Interfaces;
using ComeYaAPI.Context;

namespace ComeYaAPI.Interfaces
{
    public interface IOrderHistoryRepository:IRepository<OrderHistory>
    {
        Task AddOrderHistory(int userId, int orderId);
    }
}
