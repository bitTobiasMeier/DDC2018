using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ServiceFabric.Mocks;
using SvcFabricDinnerDemo.RestaurantService.Interfaces;

namespace SvcFabricDinnerDemo.RestaurantService.Tests
{
    [TestClass]
    public class UnitTestRestaurantService
    {
        [TestMethod]
        public async Task AddRestaurant()
        {
            var restaurantName = "KleinAberFein";
            var context = MockStatefulServiceContextFactory.Default;
            var stateManager = new MockReliableStateManager();
            IRestaurantService svc = new RestaurantService(context, stateManager);
            var svcadmin = svc as IRestaurantAdminService;
            var result = await svcadmin.CreateRestaurant(new Restaurant() { Name = restaurantName });
            var restaurant = await svc.GetRestaurantAsync(result.Id);
            Assert.IsNotNull(restaurant);
            Assert.AreEqual(result.Id, restaurant.Id);
            Assert.AreEqual(restaurantName, restaurant.Name);
        }
    }
}
