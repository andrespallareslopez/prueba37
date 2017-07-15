namespace prueba37
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using Models;

    public partial class Empresarios20 : DbContext
    {
        public Empresarios20()
            : base("name=Empresarios20")
        {
        }

        public virtual DbSet<gesActividade> gesActividades { get; set; }
        public virtual DbSet<gesAnulacione> gesAnulaciones { get; set; }
        public virtual DbSet<gesArqueo> gesArqueos { get; set; }
        public virtual DbSet<gesArqueoDetalle> gesArqueoDetalles { get; set; }
        public virtual DbSet<gesArticulo> gesArticuloes { get; set; }
        public virtual DbSet<gesArticuloClase> gesArticuloClases { get; set; }
        public virtual DbSet<gesArticuloFamilia> gesArticuloFamilias { get; set; }
        public virtual DbSet<gesArticuloGrupo> gesArticuloGrupoes { get; set; }
        public virtual DbSet<gesCatalogo> gesCatalogoes { get; set; }
        public virtual DbSet<gesClaseCliente> gesClaseClientes { get; set; }
        public virtual DbSet<gesCliente> gesClientes { get; set; }
        public virtual DbSet<gesCobro> gesCobroes { get; set; }
        public virtual DbSet<gesDispositivo> gesDispositivoes { get; set; }
        public virtual DbSet<gesEscandallo> gesEscandalloes { get; set; }
        public virtual DbSet<gesEscandallo_Num> gesEscandallo_Num { get; set; }
        public virtual DbSet<gesFacTique> gesFacTiques { get; set; }
        public virtual DbSet<gesFacTique_Num> gesFacTique_Num { get; set; }
        public virtual DbSet<gesFactura> gesFacturas { get; set; }
        public virtual DbSet<gesFamilia> gesFamilias { get; set; }
        public virtual DbSet<gesGrupo> gesGrupoes { get; set; }
        public virtual DbSet<gesLocal> gesLocals { get; set; }
        public virtual DbSet<gesMesa> gesMesas { get; set; }
        public virtual DbSet<gesPagoForma> gesPagoFormas { get; set; }
        public virtual DbSet<gesPedido> gesPedidoes { get; set; }
        public virtual DbSet<gesPedidoDetalle> gesPedidoDetalles { get; set; }
        public virtual DbSet<gesPeriodo> gesPeriodos { get; set; }
        public virtual DbSet<gesPersona> gesPersonas { get; set; }
        public virtual DbSet<gesPoblacion> gesPoblacions { get; set; }
        public virtual DbSet<gesProducto> gesProductoes { get; set; }
        public virtual DbSet<gesProducto_Num> gesProducto_Num { get; set; }
        public virtual DbSet<gesProveedore> gesProveedores { get; set; }
        public virtual DbSet<gesSeguridad> gesSeguridads { get; set; }
        public virtual DbSet<gesTipoPedido> gesTipoPedidoes { get; set; }
        public virtual DbSet<gesTrabajador> gesTrabajadors { get; set; }
        public virtual DbSet<gesZona> gesZonas { get; set; }
        public virtual DbSet<TotalArqueo> TotalArqueos { get; set; }
        public virtual DbSet<TotalDetalleArqueo> TotalDetalleArqueos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<gesActividade>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesArqueo>()
                .Property(e => e.Trabajador)
                .IsUnicode(false);

            modelBuilder.Entity<gesArqueo>()
                .Property(e => e.Centro)
                .IsUnicode(false);

            modelBuilder.Entity<gesArqueo>()
                .Property(e => e.Dispositivo)
                .IsUnicode(false);

            modelBuilder.Entity<gesArqueo>()
                .Property(e => e.Periodo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesArqueoDetalle>()
                .Property(e => e.Realidad)
                .IsUnicode(false);

            modelBuilder.Entity<gesArqueoDetalle>()
                .Property(e => e.Registro)
                .IsUnicode(false);

            modelBuilder.Entity<gesArticulo>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesArticulo>()
                .HasMany(e => e.gesPedidoDetalles)
                .WithRequired(e => e.gesArticulo)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<gesArticuloClase>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesArticuloClase>()
                .Property(e => e.Cantidad)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesArticuloClase>()
                .Property(e => e.NRacion)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesArticuloFamilia>()
                .Property(e => e.Descripcion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesArticuloGrupo>()
                .Property(e => e.Descripcion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesCatalogo>()
                .Property(e => e.Precio)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesCatalogo>()
                .Property(e => e.Importe)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesClaseCliente>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.Apellidos)
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.Empresa)
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.CIF)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.Direccion)
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.Localidad)
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.Provincia)
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.CP)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesCliente>()
                .Property(e => e.Telefono1)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesCobro>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesDispositivo>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<gesDispositivo>()
                .Property(e => e.Tipo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesEscandallo>()
                .Property(e => e.Clase)
                .IsUnicode(false);

            modelBuilder.Entity<gesEscandallo>()
                .Property(e => e.Cantidad)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesEscandallo_Num>()
                .Property(e => e.Cantidad)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Detalle)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Suceso)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Operacion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Dispositivo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Actividad)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Zona)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Grupo)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Familia)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Cliente)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Trabajador)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Periodo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique>()
                .Property(e => e.Estadio)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique_Num>()
                .Property(e => e.Detalle)
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique_Num>()
                .Property(e => e.Suceso)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique_Num>()
                .Property(e => e.Operacion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFacTique_Num>()
                .Property(e => e.Estadio)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFactura>()
                .Property(e => e.Mesa)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFactura>()
                .Property(e => e.Estado)
                .IsUnicode(false);

            modelBuilder.Entity<gesFactura>()
                .Property(e => e.Cliente)
                .IsUnicode(false);

            modelBuilder.Entity<gesFactura>()
                .Property(e => e.Operador)
                .IsUnicode(false);

            modelBuilder.Entity<gesFactura>()
                .Property(e => e.Dispositivo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesFamilia>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesGrupo>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesLocal>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<gesLocal>()
                .Property(e => e.Direccion)
                .IsUnicode(false);

            modelBuilder.Entity<gesLocal>()
                .Property(e => e.Localidad)
                .IsUnicode(false);

            modelBuilder.Entity<gesLocal>()
                .Property(e => e.Provincia)
                .IsUnicode(false);

            modelBuilder.Entity<gesLocal>()
                .Property(e => e.CIF)
                .IsUnicode(false);

            modelBuilder.Entity<gesLocal>()
                .Property(e => e.Telefono)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPagoForma>()
                .Property(e => e.Descripcion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPedido>()
                .Property(e => e.Telefono)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPedido>()
                .HasMany(e => e.gesPedidoDetalles)
                .WithRequired(e => e.gesPedido)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Debe_haber)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Tenemos)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Pedimos)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.PresentacionUnidades)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.PresentacionPrecio)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Pedido_por)
                .IsUnicode(false);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Recibido_por)
                .IsUnicode(false);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Precio)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Descuento)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPedidoDetalle>()
                .Property(e => e.Cajas)
                .HasPrecision(18, 4);

            modelBuilder.Entity<gesPeriodo>()
                .Property(e => e.Descripcion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.Nombre)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.Apellidos)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.DNI)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.Domicilio)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.SS)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.Genero)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.Movil)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.Fijo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPersona>()
                .Property(e => e.email)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesPoblacion>()
                .Property(e => e.Descripcion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProducto>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesProducto_Num>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Nombre)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Apellidos)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Empresa)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.TelefonoFijo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.TelefonoMovil)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Cif)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Direccion)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Localidad)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Provincia)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.Email)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.TipoPago)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .Property(e => e.NRSanitario)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesProveedore>()
                .HasMany(e => e.gesPedidoes)
                .WithRequired(e => e.gesProveedore)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<gesSeguridad>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Apellidos)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Alias)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Fijo)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Movil)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Direccion)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Localidad)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Provincia)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.CP)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.DNI)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.SS)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Banco)
                .IsUnicode(false);

            modelBuilder.Entity<gesTrabajador>()
                .Property(e => e.Clave)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<gesZona>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<gesZona>()
                .Property(e => e.Tipo)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<TotalArqueo>()
                .HasMany(e => e.TotalDetalleArqueos)
                .WithRequired(e => e.TotalArqueo)
                .WillCascadeOnDelete(false);
        }
    }
}
