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
    public class GetAllCommoditiesHandler : IRequestHandler<GetAllCommoditiesCommand, IEnumerable<CommodityDetailsModel>>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public GetAllCommoditiesHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CommodityDetailsModel>> Handle(GetAllCommoditiesCommand request, CancellationToken cancellationToken)
        {
            return await _repository.GetAllCommodities()
                .Include(x => x.Images)
                .Select(x => _mapper.Map<CommodityDetailsModel>(x))
                .ToListAsync(cancellationToken);
        }
    }
}