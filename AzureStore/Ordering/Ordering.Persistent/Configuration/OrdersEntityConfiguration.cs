using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Ordering.Domain.Models;

namespace Ordering.Persistent.Configuration
{
	public class OrdersEntityConfiguration : IEntityTypeConfiguration<OrderInfo>
	{
		public void Configure(EntityTypeBuilder<OrderInfo> builder)
		{
			builder.ToTable("Orders");
			builder.HasKey(x => x.Id);
			builder.Property(x => x.UserEmail)
				.IsRequired();
			builder.Property(x => x.State)
				.IsRequired();
			builder.Property(x => x.Total)
				.IsRequired();
		}
	}
}
