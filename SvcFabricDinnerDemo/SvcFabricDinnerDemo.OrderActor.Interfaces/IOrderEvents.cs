using System;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Remoting.FabricTransport;
using Microsoft.ServiceFabric.Services.Remoting;

namespace SvcFabricDinnerDemo.OrderActor.Interfaces
{
    public interface IOrderEvents : IActorEvents
    {
        void OrderServed(ActorId actorId, Guid dishId);

        void OrderStateChanged(ActorId actorId, OrderState state);
    }

}
