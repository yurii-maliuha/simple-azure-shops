using Ordering.Domain.Models;
using System.Linq;

namespace Ordering.Persistent.Repositories
{
	public interface IOrderRepository
	{
		IQueryable<OrderInfo> GetAllOrders();
	}
}
