using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class GetCommodityByIdCommand : IRequest<CommodityDetailsModel>
    {
        public int Id { get; }

        public GetCommodityByIdCommand(int id)
        {
            Id = id;
        }
    }
}