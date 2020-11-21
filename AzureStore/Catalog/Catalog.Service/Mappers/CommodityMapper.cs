using System;
using System.Collections.Generic;
using System.Linq;
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
            CreateMap<Commodity, CommodityDetailsModel>()
                .ForMember(x => x.Type,
                    x => x.MapFrom(x => x.CommodityTypeId))
                .ForMember(x => x.Images, opt => opt.MapFrom(
                    x => x.Images.Select(im => im.Url)))
                .ForMember(x => x.Price,
                    x => x.AddTransform(value => Math.Round(value, 2)));
            CreateMap<CommodityType, CommodityCategoryModel>();
            CreateMap<ProductModel, Commodity>()
                .ForMember(x => x.CommodityTypeId,
                    opt => opt.MapFrom(source => source.TypeId));

            CreateMap<UpdateProductModel, Commodity>()
                .ForMember(x => x.CommodityTypeId,
                    opt => opt.MapFrom(x => x.TypeId));
        }
    }
}