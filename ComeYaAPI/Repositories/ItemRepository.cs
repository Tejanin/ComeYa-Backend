using AutoMapper;
using ComeYa.Repositories;
using ComeYaAPI.Context;
using ComeYaAPI.Interfaces;
using ComeYaAPI.Models.DTOs.ItemDTOs;
using ComeYaAPI.Models.ResultsMessages;
using ComeYaAPI.Services;

namespace ComeYaAPI.Repositories
{
    public class ItemRepository: Repository<Item>, IItemRepository
    {
        private readonly IMapper _mapper;
        
        public ItemRepository(ComeyaContext context, IMapper mapper) : base(context)
        {
           
            _mapper = mapper;
        }
        public ComeyaContext? ComeyaContext
        {
            get { return _context as ComeyaContext; }
           
        }

        public async Task<EntityListResult<ReadItemDTO>> GetAllItems(string type, decimal price , int page, ulong combo)
        {
            var filters = new List<Func<Item, bool>>();
            var result = new EntityListResult<ReadItemDTO>();

            if (!string.IsNullOrEmpty(type)) filters.Add(x => x.Food.FoodType.Description == type);
            if (price > 0) filters.Add(x => x.Price <= price);
            if (combo != 2) filters.Add(x=> x.Combo == combo);


            var items = await GetAllIncluding<Item>(null,
                x => x.Food,
                x => x.Food.CategoryType,
                x=> x.Food.FoodType,
                x=> x.Restaurant
                );
            var filteredItems = Filter(items,filters);
            var pagedFilteredRecords = Paginate(filteredItems,page,4M);

            var itemsDTOList = pagedFilteredRecords.Select(x => new ReadItemDTO
            {
                Id = x.Id,
                Price = x.Price,
                Description = x.Description,
                Restaurant = x.Restaurant.Name,
                Image = x.Image,
                Name = x.Name,
                Food = x.Food.FoodType.Description,
                Category = x.Food.CategoryType.Description
            }).ToList();

           
            result.StatusCode = 200;
            result.Entity = itemsDTOList;
            return result;


        }

        public Task<EntityListResult<ReadItemDTO>> GetAllItems(string type, decimal price, int page, int combo)
        {
            throw new NotImplementedException();
        }
    }
}
