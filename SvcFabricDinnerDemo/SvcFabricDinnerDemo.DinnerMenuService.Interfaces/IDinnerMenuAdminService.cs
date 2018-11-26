using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Remoting;

namespace SvcFabricDinnerDemo.DinnerMenuService.Interfaces
{

    public interface IDinnerMenuAdminService : IService
    {
        Task<Guid> AddDishAsync(Guid restaurantId, Dish dish);
    }
}




