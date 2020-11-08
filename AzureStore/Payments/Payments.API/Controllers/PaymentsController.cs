using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Payments.API.Policy;
using Payments.Services.Commands;
using Payments.Services.Models;

namespace Payments.API.Controllers
{
    [Route("api/payments")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PaymentsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<PaymentInfo>), 200)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        //[Authorize(Policy = Policies.Admin)]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllPayments()
        {
            return Ok(await _mediator.Send(new GetAllPaymentsCommand()));
        }

        [HttpPost]
        public async Task<IActionResult> SavePayment([FromBody] SavePaymentModel payment)
        {
            var result = await _mediator.Send(new SavePaymentCommand(payment));

            return Ok(result);
        }
    }
}