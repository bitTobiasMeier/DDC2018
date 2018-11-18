using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Remoting.FabricTransport;
using Microsoft.ServiceFabric.Services.Remoting;

[assembly: FabricTransportActorRemotingProvider(RemotingListenerVersion = RemotingListenerVersion.V2_1, RemotingClientVersion = RemotingClientVersion.V2_1)]
namespace SvcFabricDinnerDemo.KitchenActor.Interfaces
{
    /// <summary>
    /// This interface defines the methods exposed by an actor.
    /// Clients use this interface to interact with the actor that implements it.
    /// </summary>
    public interface IKitchenActor : IActor, IActorEventPublisher<IKitchenEvents>
    {
        Task AddOrderAsync(KitchenOrder kitchenOrder);
        Task<List<KitchenOrder>> GetKitchenQueue(CancellationToken none);
        Task<List<KitchenOrder>> GetKitchenCookingQueue(CancellationToken none);
    }
}