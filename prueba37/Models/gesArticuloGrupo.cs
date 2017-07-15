namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesArticuloGrupo")]
    public partial class gesArticuloGrupo
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesArticuloGrupo()
        {
            gesArticuloFamilias = new HashSet<gesArticuloFamilia>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodGrupo { get; set; }

        [StringLength(50)]
        public string Descripcion { get; set; }

        public bool? Activo { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesArticuloFamilia> gesArticuloFamilias { get; set; }
    }
}
