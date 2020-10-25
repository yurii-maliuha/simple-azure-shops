using System;
using System.Collections.Generic;
using System.Text;

namespace Catalog.Service.Models
{
    public class SearchFilterModel
    {
        public IEnumerable<int> CommodityTypes { get; set; }
        public decimal? From { get; set; }
        public decimal? To { get; set; }
    }
}
