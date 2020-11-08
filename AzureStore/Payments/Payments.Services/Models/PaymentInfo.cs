using System;
using System.Collections.Generic;
using System.Text;

namespace Payments.Services.Models
{
    public class PaymentInfo
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public string TransactionId { get; set; }
        public DateTimeOffset? Created { get; set; }
        public decimal Amount { get; set; }
        public string Currency { get; set; }
        public string Provider { get; set; }
        public string Status { get; set; }
    }
}