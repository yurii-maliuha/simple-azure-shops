﻿using System.Linq;
using System.Threading.Tasks;
using Catalog.Domain;

namespace Catalog.Persistence.Repositories
{
    public class CatalogRepository : ICatalogRepository
    {
        private readonly ApplicationDbContext _context;

        public CatalogRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IQueryable<Commodity> GetAllCommodities()
        {
            return _context.Commodities.AsQueryable();
        }

        public IQueryable<CommodityType> GetCategories()
        {
            return _context.CommodityTypes.AsQueryable();
        }

        public Commodity GetCommodity(int id)
        {
            return _context.Commodities.FirstOrDefault(x => x.Id == id);
        }
    }
}