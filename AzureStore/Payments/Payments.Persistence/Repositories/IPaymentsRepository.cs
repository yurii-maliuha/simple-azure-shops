using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Payments.Domain;

namespace Payments.Persistence.Repositories
{
    public interface IPaymentsRepository
    {
        IQueryable<Payment> Payments();

        Task<Guid> CreatePayment(Payment payment);

        Task SaveAsync(CancellationToken token = default);

        Task<Payment> GetById(Guid id);
    }
}