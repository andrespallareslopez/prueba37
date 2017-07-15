namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesArticuloFamilia")]
    public partial class gesArticuloFamilia
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesArticuloFamilia()
        {
            gesArticuloes = new HashSet<gesArticulo>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodFamilia { get; set; }

        [StringLength(50)]
        public string Descripcion { get; set; }

        public bool? Activo { get; set; }

        public int? CodGrupo { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesArticulo> gesArticuloes { get; set; }

        public virtual gesArticuloGrupo gesArticuloGrupo { get; set; }
    }
}
