using Microsoft.AspNetCore.Mvc;
using System;

namespace DeliveryService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveryController : ControllerBase
    {
        public DeliveryController(AzureStorageVolumeUtility volumeUtility)
        {
            this.volumeUtility = volumeUtility;
        }

        private AzureStorageVolumeUtility volumeUtility { get; }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] DeliverOrder deliverOrder)
        {
            this.volumeUtility.Write($"Deliver {deliverOrder.Food} to {deliverOrder.RestaurantId} \r\n");
            System.Diagnostics.Debug.WriteLine(deliverOrder.Food);
        }

        public string Get ()
        {
            return this.volumeUtility.Read();
        }
    }

    public class DeliverOrder
    {
        public Guid RestaurantId { get; set; }
        public string Food { get; set; }
    }
}
