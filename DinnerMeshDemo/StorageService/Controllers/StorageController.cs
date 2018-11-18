using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace StorageService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StorageController : ControllerBase
    {
        [HttpPost]
        public void Post([FromBody] FoodOrder foodOrder)
        {
            System.Diagnostics.Debug.WriteLine(foodOrder.RestaurantId);
            foreach (var item in foodOrder.Items)
            {
                System.Diagnostics.Debug.WriteLine(item);
                DeliverAsync(foodOrder.RestaurantId, item);
            }
        }

        private Task DeliverAsync(Guid restaurantId, string food)
        {
            var client = new HttpClient();
            var order = new DeliverOrder() {
                RestaurantId = restaurantId,
                Food = food
            };
            using (var response = client.PostAsJsonAsync(Environment.GetEnvironmentVariable("DeliverService_URL"), order).GetAwaiter().GetResult())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    return response.Content.ReadAsStringAsync();
                }
                else
                {
                    throw new Exception("Error:" + response.ReasonPhrase);
                }
            }

        }
    }

    

    public class FoodOrder
    {
        public Guid RestaurantId { get; set; }
        public string [] Items { get; set; }
    }

    public class DeliverOrder
    {
        public Guid RestaurantId { get; set; }
        public string Food { get; set; }
    }
}
