namespace prueba37.repositories
{

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Data;

    using repositories;
    using prueba37;
    using Models;

    public class GrupoRepository :GenericRepositoryAsync<Empresarios20,gesGrupo>,IGrupoRepository,IDisposable
        {
        public virtual void Dispose()
        {
            base.Dispose(true);
        }
    }
    
}