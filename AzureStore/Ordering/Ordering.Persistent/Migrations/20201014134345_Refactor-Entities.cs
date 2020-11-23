using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Ordering.Persistent.Migrations
{
    public partial class RefactorEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Orders_OrderInfoId",
                table: "OrderItems");

            migrationBuilder.AlterColumn<Guid>(
                name: "OrderInfoId",
                table: "OrderItems",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Orders_OrderInfoId",
                table: "OrderItems",
                column: "OrderInfoId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Orders_OrderInfoId",
                table: "OrderItems");

            migrationBuilder.AlterColumn<Guid>(
                name: "OrderInfoId",
                table: "OrderItems",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Orders_OrderInfoId",
                table: "OrderItems",
                column: "OrderInfoId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
