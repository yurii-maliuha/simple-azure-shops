namespace Ordering.Domain.Models
{
	public class OrderItem
	{
		public int Id { get; set; }

		public int ComodityId { get; set; }

		public int Quantity { get; set; }

		public decimal Price { get; set; }

		public decimal Total => Price * Quantity;

	}
}
