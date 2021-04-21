using AutoMapper;
using Catalog.Persistence;
using Catalog.Persistence.Repositories;
using Catalog.Service.Handlers;
using Catalog.Service.Mappers;
using HealthChecks.UI.Client;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace Catalog.API
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _hostingEnvironment;

        public Startup(IConfiguration configuration, IWebHostEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            if (_hostingEnvironment.IsDevelopment())
            {
                services.AddCors(o => o.AddPolicy("CORS", builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                }));
            }

            services.AddDbContext<ApplicationDbContext>(c =>
            {
                var connectionString = _configuration.GetConnectionString(_hostingEnvironment.EnvironmentName);
                c.UseSqlServer(connectionString);
            });

            services.AddTransient<ICatalogRepository, CatalogRepository>();

            services.AddControllers();
            services.AddMediatR(typeof(GetAllCommoditiesHandler));
            services.AddAutoMapper(typeof(CommodityMapper));
            services.AddSwaggerGen(c =>
            {
                c.DescribeAllParametersInCamelCase();
                c.SwaggerDoc("v1", new OpenApiInfo());
            });
            services.AddLogging();

            services.AddHealthChecksUI()
                .AddInMemoryStorage();

            services.AddHealthChecks()
                .AddSqlServer(_configuration.GetConnectionString(_hostingEnvironment.EnvironmentName));

           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors("CORS");
            }

            app.UseRouting();
            app.UseEndpoints(x => x.MapControllers());
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Catalog V1");
            });
            app.UseHealthChecks("/hc",
                new HealthCheckOptions
                {
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
                }).UseHealthChecksUI();
        }
    }
}
