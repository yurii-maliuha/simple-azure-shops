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
    [Route("api")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CategoriesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("categories")]
        [ProducesResponseType(typeof(IEnumerable<CommodityCategoryModel>), 200)]
        public async Task<IActionResult> GetCategories()
        {
            var result = await _mediator.Send(new GetCommodityCategoriesCommand());
            return Ok(result);
        }

        [HttpGet("category/{categoryId:int}/commodities")]
        [ProducesResponseType(typeof(IEnumerable<CommodityDetailsModel>), 200)]
        public async Task<IActionResult> GetCommoditiesByCategory([FromRoute] int categoryId)
        {
            var result = await _mediator.Send(new GetCommoditiesByCategoryCommand(categoryId));
            return Ok(result);
        }
    }
}