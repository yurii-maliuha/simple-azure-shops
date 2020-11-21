using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class UpdateProductCommand : IRequest<CommodityDetailsModel>
    {
        public UpdateProductModel Product { get; set; }

        public UpdateProductCommand(UpdateProductModel product)
        {
            Product = product;
        }
    }
}