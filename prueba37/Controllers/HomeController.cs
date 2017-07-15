using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prueba37.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
            
        {
            TempData["itemMenu"] = "home";
            TempData["itemSubMenu"] = "/Home/Index";
            return View();
        }
        public ActionResult List()
        {
            TempData["itemMenu"] = "home";
            TempData["itemSubMenu"] = "/Home/List";
            return View();
        }
        public ActionResult ListGroup()
        {
            TempData["itemMenu"] = "home";
            TempData["itemSubMenu"] = "/Home/ListGroup";
            return View();
        }
        public ActionResult ListAccordion()
        {
            TempData["itemMenu"] = "home";
            TempData["itemSubMenu"] = "/Home/ListAccordion";
            return View();
        }
    }
}