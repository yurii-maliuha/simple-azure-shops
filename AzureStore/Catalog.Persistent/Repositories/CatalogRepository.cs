using System.Linq;
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
    }
}
