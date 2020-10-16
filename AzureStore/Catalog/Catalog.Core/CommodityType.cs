using System;
using System.Collections.Generic;
using System.Text;

namespace Catalog.Domain
{
    public class CommodityType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Commodity> Commodities { get; set; }
    }
}
