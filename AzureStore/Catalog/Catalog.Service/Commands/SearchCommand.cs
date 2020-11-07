using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class SearchCommand : IRequest<Page<CommodityDetailsModel>>
    {
        public SearchFilterModel Filter { get; }

        public SearchCommand(SearchFilterModel filter)
        {
            Filter = filter;
        }
    }
}