using MediatR;
using Orders.Domain.Models;
using System;
using System.Collections.Generic;

namespace Orders.Domain.Commands
{
	public class CreateOrderCommand : IRequest<OrderInfo>
	{
		// test2
		public string UserEmail { get; set; }

		public List<Guid> ProductsId { get; set; }
	}
}
