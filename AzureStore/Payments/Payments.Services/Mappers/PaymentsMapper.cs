using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Payments.Domain;
using Payments.Services.Models;

namespace Payments.Services.Mappers
{
    public class PaymentsMapper : Profile
    {
        public PaymentsMapper()
        {
            CreateMap<Payment, PaymentInfo>()
                .ForMember(x => x.Status,
                    opt =>
                        opt.MapFrom(source => source.Status.Description));

            CreateMap<SavePaymentModel, Payment>();
        }
    }
}