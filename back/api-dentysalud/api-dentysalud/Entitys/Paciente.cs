using System.ComponentModel.DataAnnotations;

namespace api_dentysalud.Entitys
{
    public class Paciente
    {
        [Key]
        public int idpaciente { get; set; }
        [Required]

        [StringLength(
            maximumLength: 100,
            ErrorMessage = "Se tiene que ingresar  un Nombre"
            )]

        public string nombrepaciente { get; set; }
        [Required]
        public string apellidopaciente { get; set; }
        [Required]
        public int dni { get; set; }
        [Required]
        public int telefonopaciente { get; set; }
        [Required]
        public string correo { get; set; }



    }
}
