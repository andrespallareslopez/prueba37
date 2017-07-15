/// <reference path="../../../typings/index.d.ts" />

$(document).ready(function(){
     
     //var alturaMain;
  
     //manejo de rutas con director
     if (!window.Promise) {
        window.Promise = Promise;
     }
     var router;
     router=new Router().init();
     FastClick.attach(document.body);
     
     router.on("/default",function(){
          viewsModel.viewModel03layout02(); 
     });
     
     router.on("/api/productos/getProductos/:grupo/:familia",function(grupo,familia){
         console.log("estoy dentro de api:"+grupo+" "+familia);
         var path=window.location.hash.toString().replace("#","");
         console.log(path);
         //console.dir(router);
         actions.loadProducstsonSlider(path);
     });
     
     var handle=new components.handleMVC({
         containerView:".main .content",
         mycontrollers:myControllers
     });
     console.dir(handle);
     router.on(/\/(\w+)\/(\w+)(.*|(\d+))?/,function(){
         var path=window.location.hash.toString().replace("#","");
         console.log(path);
         var pathArray=util.arrayofhash(path);
         console.log(pathArray);
         var controller=pathArray[1];
         var action=pathArray[2];
         handle.render(controller,action);
         
     });
      
     router.setRoute("/");
      viewsModel.viewModel03layout02(); 
});  //end jquery.ready()
