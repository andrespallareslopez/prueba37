using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using prueba37.Models;
using prueba37.repositories;

namespace prueba37.Controllers
{
    public class ProductosController : Controller
    {

        IProductoRepositoryAsync _repo;
        public ProductosController(IProductoRepositoryAsync repo)
        {
            _repo = repo;
        }
        // GET: Productos
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult List()
        {
            return View();
        }
        
        public PartialViewResult ListProductos()
        {
            var productos = _repo.GetAll().ToList();
            return PartialView("ListaProductos",productos);
        }
        public PartialViewResult ListBySearch(string cadena)
        {
            var productos = _repo.FindBy(p => p.Descripcion.Contains(cadena)).ToList();
            return PartialView("ListaProductos", productos);
        }
        //GET: Productos por grupo y por familia
        public ActionResult IndexBy(int CodGrupo,int CodFamilia)
        {
            ViewBag.CodGrupo = CodGrupo;
            ViewBag.CodFamilia = CodFamilia;
            return View();
        }
        //Get: Productos por grupo y familia
        public JsonResult getProductos(int CodGrupo,int CodFamilia)
        {
            var productos = _repo.getProductos(CodGrupo, CodFamilia);
            return Json(productos.ToList(), JsonRequestBehavior.AllowGet);              
        }
        public JsonResult getBySearch(int CodGrupo,int CodFamilia,string cadena)
        {
            var productos = _repo.FindBy(g=>g.CodGrupo==CodGrupo && g.CodFamilia==CodFamilia && g.Descripcion.Contains(cadena));
            return Json(productos.ToList(), JsonRequestBehavior.AllowGet);

        }
    }
}