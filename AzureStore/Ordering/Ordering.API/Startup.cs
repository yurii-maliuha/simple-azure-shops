using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Ordering.Persistent;
using Orders.Service.Handlers;

namespace Orders.API
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

			services.AddControllers()
				.AddNewtonsoftJson(options =>
				options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
			);
			services.AddMediatR(typeof(Startup), typeof(CreateOrderHandler));
			services.AddDbContext<OrderingContext>(c =>
			{
				c.UseSqlServer(_configuration.GetConnectionString("OrderingDb"));
			});

			services.AddTransient<Ordering.Persistent.Repositories.IOrderRepository, Ordering.Persistent.Repositories.OrderRepository>();
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseCors("CORS");
			}

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
