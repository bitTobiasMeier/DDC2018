using Microsoft.AspNetCore.Mvc;
using System;

namespace DeliveryService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveryController : ControllerBase
    {
        // POST api/values
        [HttpPost]
        public void Post([FromBody] DeliverOrder deliverOrder)
        {
            System.Diagnostics.Debug.WriteLine(deliverOrder.Food);
        }
    }

    public class DeliverOrder
    {
        public Guid RestaurantId { get; set; }
        public string Food { get; set; }
    }
}
