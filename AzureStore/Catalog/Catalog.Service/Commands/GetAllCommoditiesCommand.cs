using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Domain;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class GetAllCommoditiesCommand : IRequest<IEnumerable<CommodityDetailsModel>>
    {
    }
}