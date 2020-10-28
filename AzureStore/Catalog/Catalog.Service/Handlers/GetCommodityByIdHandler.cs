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

        public Task<CommodityDetailsModel> Handle(GetCommodityByIdCommand request, CancellationToken cancellationToken)
        {
            var commodity = _repository.GetCommodity(request.Id);

            return Task.FromResult(_mapper.Map<CommodityDetailsModel>(commodity));
        }
    }
}