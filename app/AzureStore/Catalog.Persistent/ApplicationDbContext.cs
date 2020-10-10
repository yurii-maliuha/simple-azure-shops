using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Domain;
using Catalog.Persistence.Seed;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
            modelBuilder.Seed();
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Commodity> Commodities { get; set; }
        public DbSet<CommodityType> CommodityTypes { get; set; }
    }
}
