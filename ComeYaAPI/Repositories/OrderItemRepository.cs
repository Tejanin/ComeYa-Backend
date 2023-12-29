using AutoMapper;
using ComeYa.Repositories;
using ComeYaAPI.Context;
using ComeYaAPI.Interfaces;
using ComeYaAPI.Services;

namespace ComeYaAPI.Repositories
{
    public class OrderItemRepository: Repository<OrderItem>, IOrderItemRepository
    {
        private readonly IMapper _mapper;
        public OrderItemRepository(ComeyaContext context, IMapper mapper) : base(context)
        {
            
            _mapper = mapper;
        }

        public ComeyaContext? ComeyaContext
        {
            get { return _context as ComeyaContext; }

        }
    }
}
