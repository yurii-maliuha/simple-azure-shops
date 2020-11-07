using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using Payments.Services.Models;

namespace Payments.Services.Commands
{
    public class GetAllPaymentsCommand : IRequest<IEnumerable<PaymentInfo>>
    {
    }
}