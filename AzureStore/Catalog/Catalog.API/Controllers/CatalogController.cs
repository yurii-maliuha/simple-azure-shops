using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Catalog.Service.Commands;
using Catalog.Service.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.API.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CatalogController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [ProducesResponseType(typeof(Page<CommodityDetailsModel>), 200)]
        public async Task<IActionResult> GetAllCommodities([FromQuery] int? page, [FromQuery] int? perPage)
        {
            var result = await _mediator.Send(new GetAllCommoditiesCommand(perPage, page));
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(CommodityDetailsModel), 200)]
        public async Task<IActionResult> GetCommodityById([FromRoute] int id)
        {
            var result = await _mediator.Send(new GetCommodityByIdCommand(id));
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(int), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        public async Task<IActionResult> CreateProduct([FromBody] ProductModel product)
        {
            var result = await _mediator.Send(new CreateProductCommand(product));
            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(typeof(int), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        public async Task<IActionResult> Update([FromBody] UpdateProductModel product)
        {
            var result = await _mediator.Send(new UpdateProductCommand(product));
            return Ok(result);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var result = await _mediator.Send(new DeleteProductCommand(id));
            return Ok(result);
        }

        [HttpPost("search")]
        [ProducesResponseType(typeof(IEnumerable<CommodityDetailsModel>), 200)]
        public async Task<IActionResult> Search([FromBody] SearchFilterModel filter)
        {
            var result = await _mediator.Send(new SearchCommand(filter));
            return Ok(result);
        }
    }
}