using System.Linq;
using System.Threading.Tasks;
using Catalog.Domain;

namespace Catalog.Persistence.Repositories
{
    public interface ICatalogRepository
    {
        IQueryable<Commodity> GetAllCommodities();
        IQueryable<CommodityType> GetCategories();
    }
}
