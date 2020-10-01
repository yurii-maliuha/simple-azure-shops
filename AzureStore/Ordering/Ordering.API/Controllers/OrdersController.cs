using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Orders.API.Models;
using Orders.Domain.Commands;

namespace Orders.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class OrdersController : ControllerBase
	{
		private readonly IMediator _mediator;

		public OrdersController(IMediator mediator)
		{
			_mediator = mediator;
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody] CreateOrderModel createOrderModel)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var order = await _mediator.Send(new CreateOrderCommand()
			{
				UserEmail = createOrderModel.UserEmail,
				ProductsId = createOrderModel.ProductsId
			});

			return Ok(order);
		}

	}
}
