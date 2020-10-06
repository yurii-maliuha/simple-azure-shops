using Ordering.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Ordering.Persistent
{
	public class OrderingContext: DbContext
	{
		public OrderingContext()
		{

		}

		public OrderingContext (DbContextOptions<OrderingContext> options) : base(options)
		{

		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfigurationsFromAssembly(typeof(OrderingContext).Assembly);
			base.OnModelCreating(modelBuilder);
		}
		public DbSet<OrderInfo> Orders { get; set; }
	}
}
