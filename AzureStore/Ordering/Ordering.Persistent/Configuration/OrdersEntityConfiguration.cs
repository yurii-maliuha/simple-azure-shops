using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Ordering.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

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
			builder.HasMany(x => x.OrderItems)
				.WithOne(x => x.OrderInfo);
		}
	}
}
