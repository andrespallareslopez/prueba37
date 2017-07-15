namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesDispositivo")]
    public partial class gesDispositivo
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesDispositivo()
        {
            gesFacTique_Num = new HashSet<gesFacTique_Num>();
            gesZonas = new HashSet<gesZona>();
        }

        [Key]
        public int CodDispositivo { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }

        public bool Activo { get; set; }

        [StringLength(20)]
        public string Tipo { get; set; }

        public bool Imprime_comanda { get; set; }

        public bool Imprime_tique { get; set; }

        public bool Imprime_factura { get; set; }

        public bool Abre_cajon { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesFacTique_Num> gesFacTique_Num { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesZona> gesZonas { get; set; }
    }
}
