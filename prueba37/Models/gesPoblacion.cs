namespace prueba37.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gesPoblacion")]
    public partial class gesPoblacion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodPoblacion { get; set; }

        [Required]
        [StringLength(20)]
        public string Descripcion { get; set; }
    }
}
