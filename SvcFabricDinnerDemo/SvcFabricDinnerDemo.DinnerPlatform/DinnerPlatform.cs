using System;
using System.Collections.Generic;
using System.Fabric;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.ServiceFabric.Services.Communication.AspNetCore;
using Microsoft.ServiceFabric.Services.Communication.Runtime;
using Microsoft.ServiceFabric.Services.Runtime;
using Microsoft.ServiceFabric.Data;
using System.Security.Cryptography.X509Certificates;
using System.Net;

namespace SvcFabricDinnerDemo.DinnerPlatform
{
    /// <summary>
    /// The FabricRuntime creates an instance of this class for each service type instance. 
    /// </summary>
    internal sealed class DinnerPlatform : StatelessService
    {
        public DinnerPlatform(StatelessServiceContext context)
            : base(context)
        { }

        /// <summary>
        /// Optional override to create listeners (like tcp, http) for this service instance.
        /// </summary>
        /// <returns>The collection of listeners.</returns>
        protected override IEnumerable<ServiceInstanceListener> CreateServiceInstanceListeners()
        {
            return new ServiceInstanceListener[]
            {
              new ServiceInstanceListener(serviceContext =>
                new KestrelCommunicationListener(serviceContext, "ServiceEndpoint", (url, listener) =>
                {
                  ServiceEventSource.Current.ServiceMessage(serviceContext, $"Starting Kestrel on {url}");
                        return new WebHostBuilder()
                              .UseKestrel(opt =>
                                    {
                                        int port = serviceContext.CodePackageActivationContext.GetEndpoint("ServiceEndpoint").Port;
                                        opt.Listen(IPAddress.IPv6Any, port, listenOptions =>
                                        {
                                            listenOptions.UseHttps(GetCertificateFromStore());
                                            listenOptions.NoDelay = true;
                                        });
                                    })
                              .ConfigureServices(
                                   services => services
                                       .AddSingleton<StatelessServiceContext>(serviceContext))
                              .UseContentRoot(Directory.GetCurrentDirectory())
                              .UseStartup<Startup>()
                              .UseServiceFabricIntegration(listener, ServiceFabricIntegrationOptions.None)
                                    .UseUrls(url).Build();
              }))
          };
        }

        private X509Certificate2 GetCertificateFromStore()
        {
            string aspNetCoreEnvironment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var subjectname = GetValueOfDinnerPlatformSection(this.Context, "CertificateSubject");
            if (string.Equals(aspNetCoreEnvironment, "Development", StringComparison.OrdinalIgnoreCase))
            {
                const string aspNetHttpsOid = "1.3.6.1.4.1.311.84.1.1";
                //const string CNName = "CN=localhost";
                using (X509Store store = new X509Store(StoreName.My, StoreLocation.LocalMachine))
                {
                    store.Open(OpenFlags.ReadOnly);
                    var certCollection = store.Certificates;
                    var currentCerts = certCollection.Find(X509FindType.FindByExtension, aspNetHttpsOid, true);
                    currentCerts = currentCerts.Find(X509FindType.FindBySubjectName, subjectname, true);
                    return currentCerts.Count == 0 ? null : currentCerts[0];
                }
            }
            else
            {
                using (X509Store store = new X509Store(StoreName.My, StoreLocation.LocalMachine))
                {
                    store.Open(OpenFlags.ReadOnly);
                    var certCollection = store.Certificates;
                    var currentCerts = certCollection.Find(X509FindType.FindBySubjectName, subjectname, false);
                    return currentCerts.Count == 0 ? null : currentCerts[0];
                }
            }
        }

        // CertificateSubject
        private static string GetValueOfDinnerPlatformSection(StatelessServiceContext context, string key)
        {
            var parameters = GetDinnerPlatformSectionParameters(context);
            var entry = parameters[key];
            if (entry == null)
            {
                return string.Empty;
            }
            return entry.Value;
        }



        private static System.Collections.ObjectModel.KeyedCollection<string, System.Fabric.Description.ConfigurationProperty> GetDinnerPlatformSectionParameters(StatelessServiceContext context)
        {
            var parameters = context.CodePackageActivationContext.GetConfigurationPackageObject("Config").Settings
                .Sections["DinnerPlatformSection"].Parameters;
            return parameters;
        }

    }
}
