namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesTipoPedido")]
    public partial class gesTipoPedido
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesTipoPedido()
        {
            gesPedidoes = new HashSet<gesPedido>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodTipoPedido { get; set; }

        [StringLength(255)]
        public string Descripcion { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesPedido> gesPedidoes { get; set; }
    }
}
