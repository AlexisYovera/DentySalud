using api_dentysalud.Entitys;
using Microsoft.EntityFrameworkCore;

namespace api_dentysalud
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Paciente> Paciente { get; set; }
        public DbSet<Secretaria> Secretaria { get; set; }
        public DbSet<Odontologo> Odonlotogo { get; set; }
        public DbSet<Local> Local { get; set; }
        public DbSet<Cita> Cita { get; set; }       
    }
}
