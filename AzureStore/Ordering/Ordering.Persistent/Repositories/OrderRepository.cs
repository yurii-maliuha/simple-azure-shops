using Ordering.Domain.Models;
using System.Linq;
using System.Threading.Tasks;

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

		public async Task<OrderInfo> CreateOrder(OrderInfo order)
		{
			_context.Orders.Add(order);
			await _context.SaveChangesAsync();
			return order;
		}
	}
}
