using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Payments.Domain;
using Payments.Persistence.Repositories;
using Payments.Services.Commands;

namespace Payments.Services.Handlers
{
    public class SavePaymentHandler : IRequestHandler<SavePaymentCommand, Guid>
    {
        private readonly IPaymentsRepository _repository;
        private readonly IMapper _mapper;

        public SavePaymentHandler(IPaymentsRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<Guid> Handle(SavePaymentCommand request, CancellationToken cancellationToken)
        {
            var payment = _mapper.Map<Payment>(request.Payment);

            var guid = await _repository.CreatePayment(payment);
            await _repository.SaveAsync(cancellationToken);

            return guid;
        }
    }
}