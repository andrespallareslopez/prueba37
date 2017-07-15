namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class gesProveedore
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public gesProveedore()
        {
            gesCatalogoes = new HashSet<gesCatalogo>();
            gesPedidoes = new HashSet<gesPedido>();
        }

        [Key]
        public int CodProveedor { get; set; }

        [StringLength(30)]
        public string Nombre { get; set; }

        [StringLength(30)]
        public string Apellidos { get; set; }

        [Required]
        [StringLength(30)]
        public string Empresa { get; set; }

        [StringLength(15)]
        public string TelefonoFijo { get; set; }

        [StringLength(15)]
        public string TelefonoMovil { get; set; }

        [StringLength(20)]
        public string Cif { get; set; }

        [StringLength(20)]
        public string Direccion { get; set; }

        [StringLength(15)]
        public string Localidad { get; set; }

        [StringLength(15)]
        public string Provincia { get; set; }

        public bool? Activo { get; set; }

        [StringLength(50)]
        public string Email { get; set; }

        [StringLength(15)]
        public string TipoPago { get; set; }

        [StringLength(150)]
        public string NRSanitario { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesCatalogo> gesCatalogoes { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<gesPedido> gesPedidoes { get; set; }
    }
}
