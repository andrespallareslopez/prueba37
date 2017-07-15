/// <reference path="../../../typings/index.d.ts" />

$(document).ready(function(){
   if ($(".container").data("root")){
       var container=new components["container"]({
         container:".container",
         pathTemplate:"src/components/layouts/"+$(".container").data("root")+"/",
         nametemplate:$(".container").data("root")
       });
   } 
  

   //$("ux-content")[0].items=[5,7];
   
   /*
   console.dir( $(".wrapper.root"));
    var observer=new components.container({
                    container:".container",
                    observerConfig:{//attributes:true,
                                    childList:true,
                                    subtree:true,
                                    characterData:true
                                    //attributes:true
                                    //attributeOldValue:true
                                                              
                                                              }
                });
                observer.promise.then(function(mutation){
                    console.dir(mutation);
                      //var content=self.render();
                      // $(".wrapper.root").find(".content").append(content);
                });
    */            
});


