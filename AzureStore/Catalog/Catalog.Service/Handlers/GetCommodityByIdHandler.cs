using System;
using System.Collections.Generic;
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
    public class GetCommodityByIdHandler : IRequestHandler<GetCommodityByIdCommand, CommodityDetailsModel>
    {
        private readonly ICatalogRepository _repository;
        private readonly IMapper _mapper;

        public GetCommodityByIdHandler(ICatalogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CommodityDetailsModel> Handle(GetCommodityByIdCommand request, CancellationToken cancellationToken)
        {
            var commodity = await _repository.GetProductById(request.Id);

            return _mapper.Map<CommodityDetailsModel>(commodity);
        }
    }
}