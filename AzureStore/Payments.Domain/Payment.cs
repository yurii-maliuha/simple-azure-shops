using System;
using System.Collections.Generic;
using System.Text;

namespace Payments.Domain
{
    public class Payment
    {
        public Guid Id { get; set; }
        public string Status { get; set; }
        public DateTimeOffset? Created { get; set; }
        public decimal Amount { get; set; }
        public string Currency { get; set; }
    }
}