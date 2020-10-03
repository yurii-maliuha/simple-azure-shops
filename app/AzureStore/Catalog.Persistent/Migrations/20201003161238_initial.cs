using Microsoft.EntityFrameworkCore.Migrations;

namespace Catalog.Persistence.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CommodityTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommodityTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Commodities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    Currency = table.Column<string>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    TypeId = table.Column<int>(nullable: true),
                    SalePrice = table.Column<decimal>(nullable: true),
                    OnSale = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Commodities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Commodities_CommodityTypes_TypeId",
                        column: x => x.TypeId,
                        principalTable: "CommodityTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Commodities_TypeId",
                table: "Commodities",
                column: "TypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Commodities");

            migrationBuilder.DropTable(
                name: "CommodityTypes");
        }
    }
}
