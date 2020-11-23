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
    public class GetAllCommoditiesHandler : IRequestHandler<GetAllCommoditiesCommand, Page<CommodityDetailsModel>>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public GetAllCommoditiesHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<Page<CommodityDetailsModel>> Handle(GetAllCommoditiesCommand request, CancellationToken cancellationToken)
        {
            var data = await _repository.Products()
                .Include(x => x.Images)
                .Skip(request.Page - 1)
                .Take(request.PerPage)
                .Select(x => _mapper.Map<CommodityDetailsModel>(x))
                .ToListAsync(cancellationToken);

            var allItems = _repository.Products().Count();
            var totalPages = allItems % request.PerPage != 0
                ? allItems / request.PerPage + 1
                : allItems / request.PerPage;
            return new Page<CommodityDetailsModel>
            {
                Data = data,
                TotalPages = totalPages
            };
        }
    }
}