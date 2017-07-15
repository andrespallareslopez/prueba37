using Autofac;
using Autofac.Integration.Mvc;
using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using prueba37.repositories;
using System.Web.Mvc;

namespace prueba37.App_Start
{
    public class ContainerConfig
    {
        public static void RegisterContainerConfiguration()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(Assembly.GetExecutingAssembly());


            builder.RegisterType<GrupoRepositoryAsync>().As<IGrupoRepositoryAsync>();


            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

        }
        public static void RegisterContainerConvention()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(Assembly.GetExecutingAssembly());
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
                .Where(x => x.Namespace.EndsWith(".repositories")).AsImplementedInterfaces();
            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

        }
    }
}