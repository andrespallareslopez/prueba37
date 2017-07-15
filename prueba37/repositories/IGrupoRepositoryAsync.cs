using prueba37;
using prueba37.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace prueba37.repositories
{
    public interface IGrupoRepositoryAsync :IGenericRepositoryAsync<gesGrupo>,IDisposable
    {
        IQueryable<gesGrupo> getGrupos();
    }
}