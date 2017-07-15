namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TotalDetalleArqueo")]
    public partial class TotalDetalleArqueo
    {
        [Key]
        [Column(Order = 0)]
        public DateTime Fecha { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(50)]
        public string Periodo { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(50)]
        public string Detalle { get; set; }

        public decimal? Total { get; set; }

        [Key]
        [Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long Codigo { get; set; }

        public bool? Activo { get; set; }

        public virtual TotalArqueo TotalArqueo { get; set; }
    }
}
