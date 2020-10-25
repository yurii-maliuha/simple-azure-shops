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
using Microsoft.EntityFrameworkCore;

namespace Catalog.Service.Handlers
{
    public class SearchHandler : IRequestHandler<SearchCommand, IEnumerable<CommodityModel>>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public SearchHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CommodityModel>> Handle(SearchCommand request, CancellationToken cancellationToken)
        {
            var filter = request.Filter;

            try
            {
                var data = await _repository.GetAllCommodities()
                    .Where(x => filter.CommodityTypes == null || filter.CommodityTypes.Contains(x.CommodityTypeId))
                    .Where(x => (x.SalePrice >= filter.From && x.SalePrice <= filter.To)
                                || x.Price >= filter.From && x.Price <= filter.To)
                    .Select(x => _mapper.Map<CommodityModel>(x))
                    .ToListAsync(cancellationToken);
                return data;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }
    }
}
