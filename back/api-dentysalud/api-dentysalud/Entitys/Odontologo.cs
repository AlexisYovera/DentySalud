using System.ComponentModel.DataAnnotations;

namespace api_dentysalud.Entitys
{
    public class Odontologo
    {
        [Key]
        public int codigoodontologo { get; set; }

        [Required]

        [StringLength(
            maximumLength: 100,
            ErrorMessage = "Se tiene que ingresar  un Nombre"
            )]
        public string nombre { get; set; }
        [Required]
        public string apellido { get; set; }
        [Required]
        public string dni { get; set; }
        [Required]
        public string telefono { get; set; }
    }
}
