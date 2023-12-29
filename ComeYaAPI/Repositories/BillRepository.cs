using AutoMapper;
using ComeYa.Repositories;
using ComeYaAPI.Context;
using ComeYaAPI.Interfaces;

namespace ComeYaAPI.Repositories
{
    public class BillRepository: Repository<Bill>, IBillRepository
    {
        private readonly IMapper _mapper;
        public BillRepository(ComeyaContext context, IMapper mapper):base(context)
        {
                _mapper = mapper;
        }
        public ComeyaContext? ComeyaContext
        {
            get { return _context as ComeyaContext; }

        }
    }
}
