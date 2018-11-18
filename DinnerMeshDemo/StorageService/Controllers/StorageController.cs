using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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
            }
        }
    }

    public class FoodOrder
    {
        public Guid RestaurantId { get; set; }
        public string [] Items { get; set; }
    }
}
