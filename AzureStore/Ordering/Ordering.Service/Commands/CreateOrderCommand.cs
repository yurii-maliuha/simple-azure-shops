using MediatR;
using Ordering.Domain.Models;
using System;
using System.Collections.Generic;

namespace Ordering.Service.Commands
{
	public class CreateOrderCommand : IRequest<OrderInfo>
	{
		public string UserEmail { get; set; }

		public List<int> ProductsId { get; set; }
	}
}
