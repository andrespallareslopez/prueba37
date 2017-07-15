using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using prueba37.Models;
using prueba37.repositories;

namespace prueba37.repositories
{
    public class ProductosRepositoryAsync :GenericRepositoryAsync<Empresarios20,gesProducto_Num>,IProductoRepositoryAsync,IDisposable
    {
        public IQueryable<gesProducto_Num> getProductos(int CodGrupo, int CodFamilia)
        {
            var context = new Empresarios20();
            
            return context.gesProducto_Num.Where(p => p.CodGrupo == CodGrupo && p.CodFamilia == CodFamilia);
            
        }

    }
}