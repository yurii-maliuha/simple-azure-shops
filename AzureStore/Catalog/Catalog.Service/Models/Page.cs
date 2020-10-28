using System;
using System.Collections.Generic;
using System.Text;

namespace Catalog.Service.Models
{
    public class Page<T>
    {
        public IEnumerable<T> Data { get; set; }
        public int TotalPages { get; set; }
    }
}