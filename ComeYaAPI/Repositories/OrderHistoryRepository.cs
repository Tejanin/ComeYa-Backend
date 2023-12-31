using AutoMapper;
using ComeYa.Repositories;
using ComeYaAPI.Context;
using ComeYaAPI.Interfaces;
using ComeYaAPI.Services;

namespace ComeYaAPI.Repositories
{
    public class OrderHistoryRepository:Repository<OrderHistory>, IOrderHistoryRepository
    {
        private readonly IMapper _mapper;
        public OrderHistoryRepository(ComeyaContext context, IMapper mapper) : base(context)
        {
            
            _mapper = mapper;
        }

        public ComeyaContext? ComeyaContext
        {
            get { return _context as ComeyaContext; }

        }

        public async Task AddOrderHistory(int userId, int orderId)
        {
            var order = new OrderHistory { OrderId = orderId, UserId = userId };
            await AddAsync(order);
        }
    }
}
