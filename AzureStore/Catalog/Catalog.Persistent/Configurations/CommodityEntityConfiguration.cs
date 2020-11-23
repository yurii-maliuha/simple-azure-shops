using Catalog.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Catalog.Persistence.Configurations
{
    public class CommodityEntityConfiguration : IEntityTypeConfiguration<Commodity>
    {
        public void Configure(EntityTypeBuilder<Commodity> builder)
        {
            builder.ToTable("Commodities");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name)
                .IsRequired();
            builder.Property(x => x.Amount)
                .IsRequired();
            builder.Property(x => x.Currency)
                .IsRequired();
            builder.Property(x => x.Price)
                .IsRequired();
            builder.Property(x => x.Description)
                .IsRequired();
            builder.Property(x => x.OnSale);
            builder.Property(x => x.SalePrice);
            builder.HasOne(x => x.Type)
                .WithMany(x => x.Commodities);
            builder.HasMany(x => x.Images)
                .WithOne(x => x.Commodity)
                .HasForeignKey(x => x.CommodityId);
        }
    }
}