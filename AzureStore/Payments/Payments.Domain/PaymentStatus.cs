using System;
using System.Collections.Generic;
using System.Text;

namespace Payments.Domain
{
    public class PaymentStatus
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public IEnumerable<Payment> Payments { get; set; }
    }
}