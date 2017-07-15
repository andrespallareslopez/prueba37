namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesPersona")]
    public partial class gesPersona
    {
        [Key]
        public Guid CodPersona { get; set; }

        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }

        [StringLength(100)]
        public string Apellidos { get; set; }

        [StringLength(10)]
        public string DNI { get; set; }

        [StringLength(10)]
        public string Domicilio { get; set; }

        public int? CodPoblacion { get; set; }

        [StringLength(20)]
        public string SS { get; set; }

        [StringLength(1)]
        public string Genero { get; set; }

        [StringLength(15)]
        public string Movil { get; set; }

        [StringLength(15)]
        public string Fijo { get; set; }

        [StringLength(20)]
        public string email { get; set; }

        public DateTime? Nacimiento { get; set; }
    }
}
