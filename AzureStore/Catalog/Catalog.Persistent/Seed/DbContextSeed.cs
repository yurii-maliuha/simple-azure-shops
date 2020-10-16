using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Bogus;
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
                .RuleFor(x=>x.Amount, x=>x.Random.Number(2000))
                .RuleFor(x => x.Description, x => x.Commerce.ProductDescription())
                .RuleFor(x => x.Price, x => decimal.Parse(x.Commerce.Price()))
                .RuleFor(x => x.ImageUrl, x => x.Image.PicsumUrl());

            var commodities = new List<Commodity>();
            foreach (var commodityType in ct)
            {
                cFaker
                    .RuleFor(x => x.CommodityTypeId, commodityType.Id);

                commodities.AddRange(cFaker.Generate(50));
            }
            
            builder.Entity<CommodityType>()
                .HasData(ct);
            builder.Entity<Commodity>()
                .HasData(commodities);
        }
    }
}
