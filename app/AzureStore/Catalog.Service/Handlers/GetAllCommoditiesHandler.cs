using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Persistence.Repositories;
using Catalog.Service.Commands;
using Catalog.Service.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Service.Handlers
{
    public class GetAllCommoditiesHandler : IRequestHandler<GetAllCommoditiesCommand, IEnumerable<CommodityModel>>
    {
        private readonly ICatalogRepository _repository;

        public GetAllCommoditiesHandler(ICatalogRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<CommodityModel>> Handle(GetAllCommoditiesCommand request, CancellationToken cancellationToken)
        {
            return await _repository.GetAllCommodities()
                .Select(x => new CommodityModel
            {
                Id = x.Id,
                Type = x.Type.Id,
                ImageUrl = x.ImageUrl,
                Price = x.Price,
                Currency = x.Currency,
                Amount = x.Amount,
                SalePrice = x.SalePrice,
                OnSale = x.OnSale,
                Description = x.Description
            }).ToListAsync(cancellationToken: cancellationToken);
        }
    }
}
