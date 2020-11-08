using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Catalog.Persistence.Configurations
{
    public class CommodityImageEntityConfiguration : IEntityTypeConfiguration<CommodityImage>
    {
        public void Configure(EntityTypeBuilder<CommodityImage> builder)
        {
            builder.ToTable("CommodityImages");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Url)
                .IsRequired();

            builder.HasOne(x => x.Commodity)
                .WithMany(x => x.Images)
                .HasForeignKey(x => x.CommodityId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}