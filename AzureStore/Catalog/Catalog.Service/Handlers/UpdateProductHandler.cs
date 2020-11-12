using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Catalog.Persistence.Repositories;
using Catalog.Service.Commands;
using Catalog.Service.Models;
using MediatR;

namespace Catalog.Service.Handlers
{
    public class UpdateProductHandler : IRequestHandler<UpdateProductCommand, CommodityDetailsModel>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public UpdateProductHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CommodityDetailsModel> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _repository.GetProductById(request.Product.Id);

            product.Price = request.Product.Price;
            product.Description = request.Product.Description;
            product.Name = request.Product.Name;
            product.SalePrice = request.Product.SalePrice;
            product.Amount = request.Product.Amount;
            product.Currency = request.Product.Currency;
            product.OnSale = request.Product.OnSale;

            await _repository.SaveChangesAsync();
            return _mapper.Map<CommodityDetailsModel>(product);
        }
    }
}