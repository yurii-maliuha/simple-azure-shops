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
    public class GetAllCommodityCategoriesHandler : IRequestHandler<GetCommodityCategoriesCommand, IEnumerable<CommodityCategoryModel>>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public GetAllCommodityCategoriesHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CommodityCategoryModel>> Handle(GetCommodityCategoriesCommand request, CancellationToken cancellationToken)
        {
            return await _repository.GetCategories()
                .Select(x => _mapper.Map<CommodityCategoryModel>(x))
                .ToListAsync(cancellationToken);
        }
    }
}
