using ComeYaAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ComeYa.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        ICartRepository Cart { get; }
        IItemRepository Items { get; }
        IRestaurantRepository Restaurants { get; }
        Task Complete();
        void BeginTransaction();
        void Rollback();
        void DisposeWithTransact();
        
    }
}

