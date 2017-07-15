namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesLocal")]
    public partial class gesLocal
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesLocal()
        {
            gesFacturas = new HashSet<gesFactura>();
            gesZonas = new HashSet<gesZona>();
        }

        [Key]
        public int CodLocal { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }

        public bool? Activo { get; set; }

        [StringLength(150)]
        public string Direccion { get; set; }

        [StringLength(50)]
        public string Localidad { get; set; }

        [StringLength(50)]
        public string Provincia { get; set; }

        [StringLength(20)]
        public string CIF { get; set; }

        [StringLength(20)]
        public string Telefono { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesFactura> gesFacturas { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesZona> gesZonas { get; set; }
    }
}
