using System;
using System.Collections.Generic;
using System.Text;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Commands
{
    public class CreateProductCommand : IRequest<int>
    {
        public ProductModel Product { get; }

        public CreateProductCommand(ProductModel product)
        {
            Product = product;
        }
    }
}