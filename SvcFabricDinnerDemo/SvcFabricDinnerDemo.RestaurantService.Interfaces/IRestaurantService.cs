using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Remoting;

namespace SvcFabricDinnerDemo.RestaurantService.Interfaces
{

    public interface IRestaurantService : IService
    {
        Task<IEnumerable<Restaurant>> GetRestaurantsAsync();
        Task<Restaurant> GetRestaurantAsync(Guid restaurantId);
        Task<IList<RestaurantTable>> GetTablesOfRestaurant(Guid restaurantId);        
        Task<RestaurantTable> GetTableAsync(Guid restaurantId, Guid tableId);
    }
}

