using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Payments.Domain;

namespace Payments.Persistence.Repositories
{
    public class PaymentsRepository : IPaymentsRepository
    {
        private readonly ApplicationDbContext _context;

        public PaymentsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Payment> GetById(Guid id)
        {
            return await _context.Payments
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public IQueryable<Payment> Payments()
        {
            return _context.Payments.AsQueryable();
        }

        public async Task<Guid> CreatePayment(Payment payment)
        {
            payment.Id = Guid.NewGuid();
            await _context.Payments.AddAsync(payment);

            return payment.Id;
        }

        public Task SaveAsync(CancellationToken token = default)
        {
            return _context.SaveChangesAsync(token);
        }
    }
}