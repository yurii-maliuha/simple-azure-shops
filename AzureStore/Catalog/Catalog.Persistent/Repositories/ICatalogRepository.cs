using System.Linq;
using System.Threading.Tasks;
using Catalog.Domain;

namespace Catalog.Persistence.Repositories
{
    public interface ICatalogRepository
    {
        IQueryable<Commodity> Products();

        IQueryable<CommodityType> GetCategories();

        Task<Commodity> GetProductById(int id);

        void DeleteById(int id);

        int AddProduct(Commodity commodity);

        Task<int> SaveChangesAsync();
    }
}