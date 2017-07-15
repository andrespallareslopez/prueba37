namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesPagoForma")]
    public partial class gesPagoForma
    {
        [Key]
        public int CodPago { get; set; }

        [StringLength(100)]
        public string Descripcion { get; set; }

        public bool? Activo { get; set; }
    }
}
