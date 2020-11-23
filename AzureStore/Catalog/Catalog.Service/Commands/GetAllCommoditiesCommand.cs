using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Domain;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class GetAllCommoditiesCommand : IRequest<Page<CommodityDetailsModel>>
    {
        public int PerPage { get; } = 20;
        public int Page { get; } = 1;

        public GetAllCommoditiesCommand(int? perPage, int? page)
        {
            PerPage = perPage >= 1 ? perPage.Value : PerPage;
            Page = page >= 1 ? page.Value : Page;
        }

        public GetAllCommoditiesCommand()
        {
        }
    }
}