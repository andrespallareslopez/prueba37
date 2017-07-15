namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TotalArqueo")]
    public partial class TotalArqueo
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TotalArqueo()
        {
            TotalDetalleArqueos = new HashSet<TotalDetalleArqueo>();
        }

        public DateTime? Fecha { get; set; }

        public decimal? Total { get; set; }

        [Key]
        public long Codigo { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TotalDetalleArqueo> TotalDetalleArqueos { get; set; }
    }
}
