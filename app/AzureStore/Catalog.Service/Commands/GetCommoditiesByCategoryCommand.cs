using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class GetCommoditiesByCategoryCommand : IRequest<IEnumerable<CommodityModel>>
    {
        public int CategoryId { get; set; }

        public GetCommoditiesByCategoryCommand(int category)
        {
            CategoryId = category;
        }
    }
}
