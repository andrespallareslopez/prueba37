using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using prueba37.App_Start;

namespace prueba37
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            ContainerConfig.RegisterContainerConvention();
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
                     
        }
    }
}
