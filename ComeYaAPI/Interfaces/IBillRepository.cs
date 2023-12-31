using ComeYa.Interfaces;
using ComeYaAPI.Context;

namespace ComeYaAPI.Interfaces
{
    public interface IBillRepository:IRepository<Bill>
    {
        Task AddBill(string receiptUrl, int orderId, int userId,decimal amount);
    }
}
