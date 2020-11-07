using System;
using System.Text;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Payments.API.Policy;
using Payments.Persistence;
using Payments.Persistence.Repositories;
using Payments.Services.Handlers;
using Payments.Services.Mappers;

namespace Payments.API
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _hostingEnvironment;

        public Startup(IConfiguration configuration, IWebHostEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            if (_hostingEnvironment.IsDevelopment())
            {
                services.AddCors(o => o.AddPolicy("CORS", builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                }));
            }

            services.AddDbContext<ApplicationDbContext>(c =>
            {
                var connectionString = _configuration.GetConnectionString(_hostingEnvironment.EnvironmentName);
                c.UseSqlServer(connectionString);
            });

            services.AddTransient<IPaymentsRepository, PaymentsRepository>();

            services.AddSwaggerGen(c =>
            {
                c.DescribeAllParametersInCamelCase();
                c.SwaggerDoc("v1", new OpenApiInfo());
            });
            services.AddLogging();
            services.AddControllers();

            services.AddAutoMapper(typeof(PaymentsMapper));

            services.AddMediatR(typeof(GetAllPaymentsHandler));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ClockSkew = TimeSpan.Zero,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        //ValidIssuer = Configuration.GetSection("Jwt")["ValidIssuer"],
                        //ValidAudience = Configuration.GetSection("Jwt")["ValidAudience"],
                        //IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.GetSection("Jwt")["Key"]))
                    };
                });

            services.AddAuthorization(options => options.AddPolicy(Policies.Admin, Admin.Policy));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors("CORS");
            }

            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(x => x.MapControllers());
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Catalog V1");
            });
        }
    }
}