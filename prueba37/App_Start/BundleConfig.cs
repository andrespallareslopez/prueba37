using System;
using System.Web;
using System.Web.Optimization;


namespace prueba37.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts")
                .Include("~/Scripts/jquery-{version}.js",
                          "~/Scripts/hammer.js",
                          "~/Scripts/handlebars.js",
                          "~/Scripts/director.js",
                          "~/Scripts/x-tag-core.js",
                          "~/Scripts/promise.js",
                          
                          "~/Scripts/values.js",
                          "~/Scripts/util01.js",
                          "~/Scripts/behaviors.js",
                          "~/Scripts/behaviors03layout02.js",
                          "~/Scripts/components01.js",
                          "~/Scripts/componentsslidePanels.js",
                          "~/Scripts/componentspanel01.js",
                          "~/Scripts/webcomponents01.js",
                          "~/Scripts/componentsMenuVerticalScroll01.js",
                          "~/Scripts/componentspanel01.js",
                          "~/Scripts/viewComponents.js",
                          "~/Scripts/viewComponents03layout02.js",
                          

                          
                          "~/Scripts/actions.js",
                          "~/Scripts/main.js"
                          ));

            bundles.Add(new ScriptBundle("~/bundles/modernizr")
                .Include("~/Scripts/modernizr-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/css")
                .Include("~/Content/font-awesome.css",
                       
                         "~/Content/03buttonmovile01.css",
                         "~/Content/03buttons.css",
                         "~/Content/03form-basic.css",
                         "~/Content/03form-input.css",
                         "~/Content/03form-login.css",
                         "~/Content/03form-fix-login-01.css",
                         "~/Content/03form-login-01.css",
                         "~/Content/03layout02.css",
                         "~/Content/04slide-container.css",
                         "~/Content/04slide-Perspective01.css",
                         "~/Content/04PanelScroll02.css",
                         "~/Content/03list-accordion.css",
                         "~/Content/03List-collections.css",
                         "~/Content/03List-group-buttons.css",
                         "~/Content/03menu-horizontal01.css",
                         "~/Content/03Menu-popup01.css",
                         "~/Content/03Menu-vertical-01.css",
                         "~/Content/03Menu-vertical01.css",
                         "~/Content/03rippleEffects01.css",
                         "~/Content/03search.css",
                         "~/Content/03transition02.css",
                         "~/Content/01animationatom.css",
                         "~/Content/04loader-progress-01.css",
                         "~/Content/04logospinners.css"));
                         
        }




    }
}