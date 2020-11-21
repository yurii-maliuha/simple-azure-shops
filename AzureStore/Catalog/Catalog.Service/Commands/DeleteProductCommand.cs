using System;
using System.Collections.Generic;
using System.Text;
using MediatR;

namespace Catalog.Service.Commands
{
    public class DeleteProductCommand : IRequest
    {
        public int Id { get; }

        public DeleteProductCommand(int id)
        {
            Id = id;
        }
    }
}