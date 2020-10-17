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
        [ProducesResponseType(typeof(IEnumerable<CommodityModel>),200)]
        public async Task<IActionResult> GetAllCommodities()
        {
            var result = await _mediator.Send(new GetAllCommoditiesCommand());
            return Ok(result);
        }

        [HttpGet("{categoryId:int}")]
        [ProducesResponseType(typeof(IEnumerable<CommodityModel>), 200)]
        public async Task<IActionResult> GetCommoditiesByCategory([FromRoute] int categoryId)
        {
            var result = await _mediator.Send(new GetCommoditiesByCategoryCommand(categoryId));
            return Ok(result);
        }

    }
}
