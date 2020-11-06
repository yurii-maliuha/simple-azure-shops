using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Payments.Domain;

namespace Payments.Persistence.Configurations
{
    public class PaymentConfiguration : IEntityTypeConfiguration<Payment>
    {
        public void Configure(EntityTypeBuilder<Payment> builder)
        {
            builder.ToTable("Payments");

            builder.HasKey(x => x.Id);
            builder.Property(x => x.Currency)
                .IsRequired();
            builder.Property(x => x.Amount)
                .IsRequired();
            builder.Property(x => x.TransactionId)
                .IsRequired();
            builder.Property(x => x.Created)
                .IsRequired();

            builder.Property(x => x.Provider);

            builder.Property(x => x.OrderId);

            builder
                .HasOne(x => x.Status)
                .WithMany(x => x.Payments)
                .HasForeignKey(x => x.StatusId);
        }
    }
}