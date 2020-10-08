using Ordering.Domain.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Ordering.Persistent.Repositories
{
	public interface IOrderRepository
	{
		IQueryable<OrderInfo> GetAllOrders();

		Task<OrderInfo> CreateOrder(OrderInfo order);
	}
}
