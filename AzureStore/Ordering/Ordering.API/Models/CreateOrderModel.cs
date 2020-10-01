using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Orders.API.Models
{
	public class CreateOrderModel
	{
		[Required]
		public string UserEmail { get; set; }

		[Required]
		public List<int> ProductsId { get; set; }
	}
}
