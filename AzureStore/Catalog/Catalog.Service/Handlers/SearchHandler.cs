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
    public class SearchHandler : IRequestHandler<SearchCommand, Page<CommodityDetailsModel>>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public SearchHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<Page<CommodityDetailsModel>> Handle(SearchCommand request, CancellationToken cancellationToken)
        {
            var filter = request.Filter;
            var skip = (filter.Page - 1) * filter.PerPage;
            try
            {
                var query = _repository.Products()
                    .Include(x => x.Images)
                    .Where(x => filter.CommodityType == null || filter.CommodityType == x.CommodityTypeId)
                    .Where(x => (x.SalePrice >= filter.From && x.SalePrice <= filter.To)
                                || x.Price >= filter.From && x.Price <= filter.To);

                var totalCount = await query.CountAsync(cancellationToken);
                var totalPages = totalCount % filter.PerPage != 0
                    ? totalCount / filter.PerPage + 1
                    : totalCount / filter.PerPage;

                var data = await query
                    .Skip(skip)
                    .Take(filter.PerPage)
                    .Select(x => _mapper.Map<CommodityDetailsModel>(x))
                    .ToListAsync(cancellationToken);

                return new Page<CommodityDetailsModel>
                {
                    Data = data,
                    TotalPages = totalPages
                };
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }
    }
}