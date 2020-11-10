using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Payments.Persistence.Repositories;
using Payments.Services.Commands;
using Payments.Services.Models;

namespace Payments.Services.Handlers
{
    public class GetAllPaymentsHandler : IRequestHandler<GetAllPaymentsCommand, IEnumerable<PaymentInfo>>
    {
        private readonly IPaymentsRepository _repository;
        private readonly IMapper _mapper;

        public GetAllPaymentsHandler(IPaymentsRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<PaymentInfo>> Handle(GetAllPaymentsCommand request, CancellationToken cancellationToken)
        {
            return await _repository.Payments()
                .Include(x => x.Status)
                .Select(x => _mapper.Map<PaymentInfo>(x))
                .ToListAsync(cancellationToken);
        }
    }
}