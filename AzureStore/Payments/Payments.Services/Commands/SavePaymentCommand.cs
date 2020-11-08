using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using Payments.Services.Models;

namespace Payments.Services.Commands
{
    public class SavePaymentCommand : IRequest<Guid>
    {
        public SavePaymentModel Payment { get; set; }

        public SavePaymentCommand(SavePaymentModel payment)
        {
            Payment = payment;
        }
    }
}