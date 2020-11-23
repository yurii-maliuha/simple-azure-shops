using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Ordering.Domain.Models;

namespace Ordering.Persistent.Configuration
{
	public class OrderItemEntityConfiguration : IEntityTypeConfiguration<OrderItem>
	{
		public void Configure(EntityTypeBuilder<OrderItem> builder)
		{
			builder.ToTable("OrderItems");
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Quantity)
				.IsRequired();
			builder.Property(x => x.ComodityId)
				.IsRequired();
			builder.Property(x => x.Price)
				.IsRequired();
			builder.Ignore(x => x.Total);
		}
	}
}
