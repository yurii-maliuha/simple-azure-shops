using Ordering.Domain.Models;
using System.Linq;

namespace Ordering.Persistent.Repositories
{
	public class OrderRepository : IOrderRepository
	{
		private readonly OrderingContext _context;

		public OrderRepository(OrderingContext context)
		{
			_context = context;
		}

		public IQueryable<OrderInfo> GetAllOrders()
		{
			return _context.Orders.AsQueryable();
		}
	}
}
