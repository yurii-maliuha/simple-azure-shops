using MediatR;
using Ordering.Domain.Models;
using Ordering.Service.Commands;
using System;
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
