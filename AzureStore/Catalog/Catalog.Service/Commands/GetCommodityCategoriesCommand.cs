using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class GetCommodityCategoriesCommand : IRequest<IEnumerable<CommodityCategoryModel>>
    {
    }
}
