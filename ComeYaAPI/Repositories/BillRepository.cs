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

        public async Task AddBill(string receiptUrl, int orderId, int userId, decimal amount)
        {
            Guid guid = Guid.NewGuid();
            string code = $"BILL-{guid.ToString("N").Substring(0, 9)}";
            var bill = new Bill
            {
                OrderId = orderId,
                UserId = userId,
                Url = receiptUrl,
                BillCode = code,
                Balance = amount * 1.18M,
                Taxes =amount * 0.18M

            };
            await AddAsync(bill);
        }
    }
}
