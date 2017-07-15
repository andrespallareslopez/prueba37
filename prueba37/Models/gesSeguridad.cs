namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesSeguridad")]
    public partial class gesSeguridad
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesSeguridad()
        {
            gesTrabajadors = new HashSet<gesTrabajador>();
        }

        [Key]
        public int CodSeguridad { get; set; }

        [StringLength(50)]
        public string Descripcion { get; set; }

        public bool? Activa { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesTrabajador> gesTrabajadors { get; set; }
    }
}
