namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesPeriodos")]
    public partial class gesPeriodo
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesPeriodo()
        {
            gesFacturas = new HashSet<gesFactura>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodPeriodo { get; set; }

        [Required]
        [StringLength(50)]
        public string Descripcion { get; set; }

        public DateTime? Inicio { get; set; }

        public DateTime? Final { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesFactura> gesFacturas { get; set; }
    }
}
