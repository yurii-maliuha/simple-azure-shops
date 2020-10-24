using System;
using System.Collections.Generic;
using System.Text;

namespace Catalog.Domain
{
    public class Commodity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Currency { get; set; }
        public int Amount { get; set; }
        public int CommodityTypeId { get; set; }
        public decimal? SalePrice { get; set; }
        public bool OnSale { get; set; }
        public CommodityType Type { get; set; }
        public List<CommodityImage> Images { get; set; }
    }
}
