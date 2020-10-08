using System;
using System.Collections.Generic;
using System.Text;

namespace Ordering.Domain.Models
{
	public class OrderItem
	{
		public int Id { get; set; }

		public int ComodityId { get; set; }

		public int Quantity { get; set; }

		public Guid OrderInfoId { get; set; }

		public virtual OrderInfo OrderInfo { get; set; }
	}
}
