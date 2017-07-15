using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using prueba37.Models;
using prueba37.repositories;

namespace prueba37.repositories
{
    public interface IProductoRepositoryAsync :IGenericRepositoryAsync<gesProducto_Num>,IDisposable
    {
        IQueryable<gesProducto_Num> getProductos(int CodGrupo, int CodFamilia);
    }
}