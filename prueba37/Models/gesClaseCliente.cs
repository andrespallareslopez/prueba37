namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesClaseCliente")]
    public partial class gesClaseCliente
    {
        [Key]
        public int CodClase { get; set; }

        [Required]
        [StringLength(100)]
        public string Descripcion { get; set; }
    }
}
