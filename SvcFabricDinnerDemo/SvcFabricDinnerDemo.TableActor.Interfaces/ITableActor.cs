using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Remoting.FabricTransport;
using Microsoft.ServiceFabric.Services.Remoting;

[assembly: FabricTransportActorRemotingProvider(RemotingListenerVersion = RemotingListenerVersion.V2_1, RemotingClientVersion = RemotingClientVersion.V2_1)]
namespace SvcFabricDinnerDemo.TableActor.Interfaces
{
    public interface ITableActor : IActor
    {
        /// <returns></returns>
        Task AddOrder(TableOrder tableorder, CancellationToken cancellationToken);
        Task<List<TableOrder>> GetOrders(CancellationToken cancellationToken);
    }

}
