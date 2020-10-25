using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Bogus;
using Bogus.DataSets;
using Catalog.Domain;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Persistence.Seed
{
    public static class DbContextSeed
    {
        public static void Seed(this ModelBuilder builder)
        {
            var ctFaker = new Faker<CommodityType>();
            ctFaker
                .Ignore(x => x.Commodities)
                .RuleFor(x => x.Name, x => x.Commerce.Categories(1).First())
                .RuleFor(x => x.Id, x => x.IndexFaker + 1);

            var ct = ctFaker.Generate(5);

            var cFaker = new Faker<Commodity>()
                .RuleFor(x => x.Id, x => x.IndexFaker + 1)
                .RuleFor(x => x.Currency, "UAH")
                .RuleFor(x => x.Name, x => x.Commerce.ProductName())
                .RuleFor(x => x.Amount, x => x.Random.Number(2000))
                .RuleFor(x => x.Description, x => x.Commerce.ProductDescription())
                .RuleFor(x => x.Price, x => decimal.Parse(x.Commerce.Price()));

            var imageFaker = new Faker<CommodityImage>()
                .Ignore(x => x.Commodity)
                .RuleFor(x => x.Id, x => x.IndexFaker + 1)
                .RuleFor(x => x.Url, x => x.Image.PicsumUrl());

            var commodities = new List<Commodity>();
            foreach (var commodityType in ct)
            {
                cFaker
                    .RuleFor(x => x.CommodityTypeId, commodityType.Id);

                commodities.AddRange(cFaker.Generate(50));
            }

            var images = new List<CommodityImage>();
            foreach (var commodity in commodities)
            {
                imageFaker.RuleFor(x => x.CommodityId, commodity.Id);
                images.AddRange(imageFaker.Generate(5));
            }

            builder.Entity<CommodityType>()
                .HasData(ct);
            builder.Entity<Commodity>()
                .HasData(commodities);
            builder.Entity<CommodityImage>()
                .HasData(images);
        }
    }
}