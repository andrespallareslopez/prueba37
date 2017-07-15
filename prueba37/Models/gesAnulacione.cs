namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class gesAnulacione
    {
        [Key]
        public int CodAnulacion { get; set; }

        public int? CodTrabajador { get; set; }

        public DateTime Fecha { get; set; }

        public int CodProducto { get; set; }

        public int CodTipo { get; set; }
    }
}
