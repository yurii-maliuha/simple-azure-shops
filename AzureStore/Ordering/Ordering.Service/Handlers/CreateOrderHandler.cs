using MediatR;
using Orders.Domain.Commands;
using Orders.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Orders.Service.Handlers
{
	public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderInfo>
	{
		public Task<OrderInfo> Handle(CreateOrderCommand command, CancellationToken cancellationToken)
		{
			//store order to DB
			var newOrder = new OrderInfo() {
				Id = Guid.NewGuid(),
				ProductsId = command.ProductsId,
				UserEmail = command.UserEmail,
				State = OrderState.Pending
			};

			return Task.FromResult(newOrder);
		}
	}
}
