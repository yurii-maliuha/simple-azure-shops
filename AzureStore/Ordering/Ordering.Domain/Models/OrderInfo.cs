using System;
using System.Collections.Generic;

namespace Ordering.Domain.Models
{
	public class OrderInfo
	{
		public Guid Id { get; set; }
		// TODO replace for UserGuid after auth will be implemented
		public string UserEmail { get; set; }
		public OrderState State { get; set; }
		public virtual IEnumerable<OrderItem> OrderItems { get; set; }
	}
}
