namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesEscandallo")]
    public partial class gesEscandallo
    {
        [Key]
        public Guid CodEscandallo { get; set; }

        public Guid? CodProducto { get; set; }

        public int? CodClase { get; set; }

        [StringLength(100)]
        public string Clase { get; set; }

        public decimal? Cantidad { get; set; }

        public int? CodMagnitud { get; set; }
    }
}
