﻿using System;
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
    public class GetAllCommoditiesByCategoryHandler : IRequestHandler<GetCommoditiesByCategoryCommand, IEnumerable<CommodityDetailsModel>>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public GetAllCommoditiesByCategoryHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CommodityDetailsModel>> Handle(GetCommoditiesByCategoryCommand request, CancellationToken cancellationToken)
        {
            return await _repository
                .Products()
                .Where(x => x.CommodityTypeId == request.CategoryId)
                .Select(x => _mapper.Map<CommodityDetailsModel>(x))
                .ToListAsync(cancellationToken);
        }
    }
}