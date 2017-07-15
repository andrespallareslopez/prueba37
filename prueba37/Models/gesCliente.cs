namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesCliente")]
    public partial class gesCliente
    {
        [Key]
        public int CodCliente { get; set; }

        [StringLength(50)]
        public string Nombre { get; set; }

        [StringLength(100)]
        public string Apellidos { get; set; }

        [StringLength(100)]
        public string Empresa { get; set; }

        public bool? Activo { get; set; }

        [StringLength(50)]
        public string CIF { get; set; }

        [StringLength(100)]
        public string Direccion { get; set; }

        [StringLength(50)]
        public string Localidad { get; set; }

        [StringLength(50)]
        public string Provincia { get; set; }

        [StringLength(10)]
        public string CP { get; set; }

        public int? CodClase { get; set; }

        [StringLength(10)]
        public string Telefono1 { get; set; }
    }
}
