using AutoMapper;
using ComeYa.Repositories;
using ComeYaAPI.Context;
using ComeYaAPI.Interfaces;
using ComeYaAPI.Models.DTOs.ItemDTOs;
using ComeYaAPI.Models.DTOs.RestaurantDTOs;
using ComeYaAPI.Models.ResultsMessages;
using Stripe;

namespace ComeYaAPI.Repositories
{
    public class RestaurantRepository:Repository<Restaurant>, IRestaurantRepository
    {
        private readonly IMapper _mapper;
        public RestaurantRepository(ComeyaContext context,IMapper mapper ) : base(context)
        {
            _mapper = mapper;
        }

        public ComeyaContext? ComeyaContext
        {
            get { return _context as ComeyaContext; }

        }

        public async Task<EntityListResult<ReadRestaurantDTO>> GetAllRestaurants(string? q, int page = 0, int rating = 0)
        {
            var filters = new List<Func<Restaurant, bool>>();
            var result = new EntityListResult<ReadRestaurantDTO>();

            switch (rating)
            {
                case 0:
                    break;
                case 1:
                    filters.Add(x => x.Rating <= 3.5M );
                    break;
                case 2:
                    filters.Add(x => x.Rating > 3.5M);
                    break;
            }

            if (!string.IsNullOrEmpty(q))
            {
               filters.Add(u => u.Name.Contains(q) || u.Description.Contains(q));
            }


            var restaurants = await GetAllAsync();
            var restaurantsQuery = restaurants.AsQueryable();
            var filteredRecords = Filter(restaurantsQuery, filters);
            var pagedFilteredRecords = Paginate(filteredRecords, page, 4M); ;
            var restaurantsDTO = _mapper.Map<IEnumerable<ReadRestaurantDTO>>(pagedFilteredRecords);
         
            result.Entity = restaurantsDTO;

            return result;
            

        }
    }
}
