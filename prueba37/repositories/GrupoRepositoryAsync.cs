
using prueba37;
using prueba37.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace prueba37.repositories
{
    public class GrupoRepositoryAsync : GenericRepositoryAsync<Empresarios20, gesGrupo>, IGrupoRepositoryAsync, IDisposable
    {
        
        public IQueryable<gesGrupo> getGrupos()
        {
            var Context = new Empresarios20();
            
            var grupos = Context.gesGrupoes.Include(g => g.gesFamilias);
            return grupos;
        }
        
    }
}