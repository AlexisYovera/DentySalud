using System.ComponentModel.DataAnnotations;

namespace api_dentysalud.Entitys
{
    public class Cita
    {
        [Key]
        public int idcita { get; set; }
        [Required]
        public string nombrepaciente { get; set; }
        [Required]
        public string apellidopaciente { get; set; }
        [Required]
        public string local { get; set; }
        [Required]
        public int Hora { get; set; }
        [Required]
        public string fecha { get; set; }

            
    }
}
