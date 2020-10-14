using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Catalog.Persistence.Configurations
{
    public class CommodityTypeEntityConfiguration : IEntityTypeConfiguration<CommodityType>
    {
        public void Configure(EntityTypeBuilder<CommodityType> builder)
        {
            builder.ToTable("CommodityTypes");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired();
            builder.HasMany(x => x.Commodities)
                .WithOne(x => x.Type)
                .HasForeignKey(x => x.CommodityTypeId);
        }
    }
}
