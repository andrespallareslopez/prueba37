/// <reference path="../../../typings/index.d.ts" />

$(document).ready(function(){
   if ($(".container").data("root")){
       var container=new components["container"]({
         container:".container",
         pathTemplate:"src/components/layouts/layout0405/",
         nametemplate:$(".container").data("root")
       });
   } 
   
});
