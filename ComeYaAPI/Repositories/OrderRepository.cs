using AutoMapper;
using ComeYa.Repositories;
using ComeYaAPI.Context;
using ComeYaAPI.Interfaces;

namespace ComeYaAPI.Repositories
{
    public class OrderRepository: Repository<Order>, IOrderRepository 
    {
        private readonly IMapper _mapper;
        public ComeyaContext? ComeyaContext
        {
            get { return _context as ComeyaContext; }

        }
        public OrderRepository(ComeyaContext context, IMapper mapper):base(context)
        {
                _mapper = mapper;
        }
    }
}
