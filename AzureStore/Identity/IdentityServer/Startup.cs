using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer4.Models;
using IdentityServer4.Test;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace IdentityServer
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentityServer()
                .AddInMemoryClients(new List<Client>
                {
                    new Client
                    {
                        ClientId = "oauthClient",
                        ClientName = "Example client application using client credentials",
                        AllowedGrantTypes = GrantTypes.ClientCredentials,
                        ClientSecrets = new List<Secret> {new Secret("SuperSecretPassword".Sha256())}, // change me!
                        AllowedScopes = new List<string> {"catalog.read"}
                    },
                    new Client
                    {
                        ClientId = "pass.client",
                        AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                        ClientSecrets =
                        {
                            new Secret("secret".Sha256())
                        },
                        AllowedScopes = { "catalog.read" }
                    }
                })
                .AddInMemoryIdentityResources(new[]
                {
                    new IdentityResources.OpenId(),
                    new IdentityResources.Profile(),
                    new IdentityResources.Email(),
                    new IdentityResource
                    {
                        Name = "role",
                        UserClaims = new List<string> {"role"}
                    }
                })
                .AddInMemoryApiResources(new[]
                {
                    new ApiResource
                    {
                        Name = "api1",
                        DisplayName = "API #1",
                        Description = "Allow the application to access API #1 on your behalf",
                        Scopes = new List<string> { "catalog.read", "catalog.write"},
                        ApiSecrets = new List<Secret> {new Secret("ScopeSecret".Sha256())},
                        UserClaims = new List<string> {"role"}
                    }
                })
                .AddInMemoryApiScopes(new[]
                {
                    new ApiScope("catalog.read", "Read Access to API #1"),
                    new ApiScope("catalog.write", "Write Access to API #1")
                })
                .AddTestUsers(new List<TestUser> {
                    new TestUser {
                        SubjectId = "5BE86359-073C-434B-AD2D-A3932222DABE",
                        Username = "Adam Larson",
                        Password = "password",
                        Claims = new List<Claim> {
                            new Claim(JwtClaimTypes.Email, "test@gmail.com"),
                            new Claim(JwtClaimTypes.Role, "admin")
                        }
                    }
                })
                .AddDeveloperSigningCredential();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseIdentityServer();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            });
        }
    }
}