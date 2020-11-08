using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Domain;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Persistence.Repositories
{
    public class CatalogRepository : ICatalogRepository
    {
        private readonly ApplicationDbContext _context;

        public CatalogRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IQueryable<Commodity> Products()
        {
            return _context.Commodities.AsQueryable();
        }

        public IQueryable<CommodityType> GetCategories()
        {
            return _context.CommodityTypes.AsQueryable();
        }

        public async Task<Commodity> GetProductById(int id)
        {
            return await _context.Commodities
                .Include(x => x.Images)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public void DeleteById(int id)
        {
            var product = _context.Commodities.First(x => x.Id == id);
            _context.Commodities.Remove(product);
        }

        public int AddProduct(Commodity commodity)
        {
            _context.Add(commodity);
            _context.SaveChanges();

            return commodity.Id;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }
}