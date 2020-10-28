using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Catalog.Service.Commands;
using Catalog.Service.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.API.Controllers
{
    [Route("api/catalog")]
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

        [HttpPost("search")]
        [ProducesResponseType(typeof(IEnumerable<CommodityDetailsModel>), 200)]
        public async Task<IActionResult> Search([FromBody] SearchFilterModel filter)
        {
            var result = await _mediator.Send(new SearchCommand(filter));
            return Ok(result);
        }
    }
}