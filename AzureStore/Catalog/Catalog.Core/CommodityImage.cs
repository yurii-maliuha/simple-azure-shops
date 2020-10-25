namespace Catalog.Domain
{
    public class CommodityImage
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int CommodityId { get; set; }
        public Commodity Commodity { get; set; }
    }
}