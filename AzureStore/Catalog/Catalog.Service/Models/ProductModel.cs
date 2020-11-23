using System.Collections.Generic;

namespace Catalog.Service.Models
{
    public class ProductModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Currency { get; set; }
        public int Amount { get; set; }
        public int TypeId { get; set; }
        public decimal? SalePrice { get; set; }
        public bool OnSale { get; set; }
        public IEnumerable<string> ImageUrls { get; set; }
    }
}