namespace Ordering.Domain.Models
{
	public class OrderItem
	{
		public int Id { get; set; }

		public int ComodityId { get; set; }

		public int Quantity { get; set; }

		public double Price { get; set; }

		public double Total => Price * Quantity;

	}
}
