using System;
using System.Collections.Generic;
using System.Text;

namespace Catalog.Service.Models
{
    public class SearchFilterModel
    {
        public int? CommodityType { get; set; }
        public int Page { get; set; } = 1;
        public int PerPage { get; set; } = 10;
        public decimal? From { get; set; }
        public decimal? To { get; set; }
    }
}