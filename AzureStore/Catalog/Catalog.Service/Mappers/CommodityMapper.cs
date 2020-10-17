using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Catalog.Domain;
using Catalog.Service.Models;

namespace Catalog.Service.Mappers
{
    public class CommodityMapper : Profile
    {
        public CommodityMapper()
        {
            CreateMap<Commodity, CommodityModel>()
                .ForMember(x => x.Type,
                    x => x.MapFrom(x => x.CommodityTypeId));

            CreateMap<CommodityType, CommodityCategoryModel>();
        }
    }
}
