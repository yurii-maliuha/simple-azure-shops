using System;
using System.Collections.Generic;

namespace Orders.Domain.Models
{
	public class OrderInfo
	{
		public Guid Id { get; set; }
		// TODO replace for UserGuid after auth will be implemented
		public string UserEmail { get; set; }

		public List<int> ProductsId { get; set; }

		public OrderState State { get; set; }
	}
}
