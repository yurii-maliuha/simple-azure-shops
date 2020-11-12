using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Catalog.Persistence.Repositories;
using Catalog.Service.Commands;
using MediatR;

namespace Catalog.Service.Handlers
{
    public class DeleteProductHandler : IRequestHandler<DeleteProductCommand>
    {
        private readonly ICatalogRepository _repository;

        public DeleteProductHandler(ICatalogRepository repository)
        {
            _repository = repository;
        }

        public async Task<Unit> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            _repository.DeleteById(request.Id);
            await _repository.SaveChangesAsync();

            return Unit.Value;
        }
    }
}