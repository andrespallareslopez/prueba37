namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class gesEscandallo_Num
    {
        [Key]
        public Guid CodEscandallo { get; set; }

        public Guid? CodProducto { get; set; }

        public int? CodClase { get; set; }

        public decimal? Cantidad { get; set; }

        public int? CodMagnitud { get; set; }

        public int CodProducto_Num { get; set; }

        public virtual gesArticuloClase gesArticuloClase { get; set; }
    }
}
