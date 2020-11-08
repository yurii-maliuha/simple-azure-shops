using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Catalog.Domain;
using Catalog.Persistence.Repositories;
using Catalog.Service.Commands;
using MediatR;

namespace Catalog.Service.Handlers
{
    public class CreateProductHandler : IRequestHandler<CreateProductCommand, int>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public CreateProductHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public Task<int> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var product = _mapper.Map<Commodity>(request.Product);
            product.Images = request.Product.ImageUrls.Select(x => new CommodityImage
            {
                Url = x
            }).ToList();

            return Task.FromResult(_repository.AddProduct(product));
        }
    }
}