using MediatR;
using Ordering.Domain.Models;
using Ordering.Persistent.Repositories;
using Ordering.Service.Commands;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Orders.Service.Handlers
{
	public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderInfo>
	{
		private readonly IOrderRepository _orderRepository;

		public CreateOrderHandler(IOrderRepository orderRepository)
		{
			_orderRepository = orderRepository;
		}
		public Task<OrderInfo> Handle(CreateOrderCommand command, CancellationToken cancellationToken)
		{
			var newOrder = new OrderInfo() {
				Id = Guid.NewGuid(),
				OrderItems = command.OrderItems,
				UserEmail = command.UserEmail,
				State = OrderState.Pending
			};

			return _orderRepository.CreateOrder(newOrder);
		}
	}
}
