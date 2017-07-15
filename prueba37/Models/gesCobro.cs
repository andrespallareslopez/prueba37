namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesCobro")]
    public partial class gesCobro
    {
        [Key]
        public int CodCobro { get; set; }

        [Required]
        [StringLength(100)]
        public string Descripcion { get; set; }

        public bool? Activo { get; set; }

        public bool? Devolucion { get; set; }

        public int? Periodo { get; set; }
    }
}
