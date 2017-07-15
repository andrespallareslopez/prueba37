/// <reference path="../../../typings/index.d.ts" />

$(document).ready(function(){
     
     //var alturaMain;
    
     //FastClick.attach(document.body);
     //manejo de rutas con director
     
     var router;
     router=new Router().init();
     FastClick.attach(document.body);
     /*
     router.on("/default",function(){
        viewsModel.createRoot(); 
     });
     */
     router.on("/api/productos/getProductos/:grupo/:familia",function(grupo,familia){
         console.log("estoy dentro de api:"+grupo+" "+familia);
         var path=window.location.hash.toString().replace("#","");
         console.log(path);
         //console.dir(router);
         actions.loadProducstsonSlider(path);
     });
     router.on(/\/(\w+)\/(\w+)/,function(){
           
     });
      
     
     viewsModel.viewModel03layout02(); 
     
     
     //router.setRoute("/default");
     
});  //end jquery.ready()