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
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllers()
				.AddNewtonsoftJson(options =>
				options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
			);
			services.AddMediatR(typeof(Startup), typeof(CreateOrderHandler));
			services.AddDbContext<OrderingContext>(c =>
			{
				c.UseSqlServer(Configuration["ConnectionString"]);
			});

			services.AddTransient<Ordering.Persistent.Repositories.IOrderRepository, Ordering.Persistent.Repositories.OrderRepository>();
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
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
