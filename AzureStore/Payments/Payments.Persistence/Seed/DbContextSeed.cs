using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Payments.Domain;

namespace Payments.Persistence.Seed
{
    public static class DbContextSeed
    {
        public static void Seed(this ModelBuilder builder)
        {
            var statuses = new List<PaymentStatus>
            {
                new PaymentStatus
                {
                    Id = 1,
                    Description = "Successful"
                },
                new PaymentStatus
                {
                    Id = 2,
                    Description = "Pending"
                },
                new PaymentStatus
                {
                    Id = 3,
                    Description = "Failed"
                }
            };

            builder.Entity<PaymentStatus>()
                .HasData(statuses);
        }
    }
}