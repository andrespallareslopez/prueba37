using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using prueba37.repositories;
using prueba37.Models;

namespace prueba37.Controllers
{
    public class GruposController : Controller
    {
        private readonly IGrupoRepositoryAsync _repo;

        public GruposController(IGrupoRepositoryAsync repo)
        {
            _repo = repo;
        }
        // GET: Grupos
        public ActionResult Index()
        {

            return View();
        }
        [ChildActionOnly]
        public PartialViewResult getGrupos()
        {
            //var grupos = _repo.GetAll().Include(g=>g.gesFamilias).ToList();
            var grupos = _repo.getGrupos().ToList();
            return PartialView("VerticalMenu02",grupos);
        }
    }
}