using System.ComponentModel.DataAnnotations;

namespace api_dentysalud.Entitys
{
    public class Local
    {
        [Key]
        public int idlocal { get; set; }
        [Required]
        public string callelocal { get; set; }
        public int numerolocal { get; set; }
        public string cplocal { get; set; }
    }
}
