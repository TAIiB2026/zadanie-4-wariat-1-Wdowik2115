
namespace WebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            
            // Konfiguracja CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MojaPolitykaCORS", policy =>
                {
                    policy.WithOrigins("http://localhost:4108")
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            // uzycie cors 
            app.UseCors("MojaPolitykaCORS");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
