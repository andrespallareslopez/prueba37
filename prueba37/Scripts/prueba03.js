//// <reference path="../../../typings/index.d.ts" />

$(document).ready(function(){
   if ($(".container").data("root")){
       var root=new components.container({
         container:".container .pages",
         pathTemplate:"src/components/layouts/"+$(".container").data("root")+"/",
         nametemplate:$(".container").data("root")
       });
       root.initevent=function(){
            
            values.containerMain=".main main"
            values.screenHeight=$(values.containerMain).height();
            values.screenWidth=$(values.containerMain).width();
                       
            behaviors[$(".wrapper.page.root .nav nav").data("behavior")]();
       
       };
       root.create(function(){
         viewsModel.createMenuVertical01({
          nameid:"#menuvertical01 ", //importante espacion en blanco
          container:".box.menu-area",
          containerComponent:".menu-vertical01",
          pathTemplate:"src/components/menu-vertical/03Menu-vertical01/",
          nametemplate:"03Menu-vertical01",
          //url:values.host+"/api/grupos/",
          //fetchTransform:transformations.gruposToElements,
          behavior:$(".wrapper.page.root .box.menu-area").data("behavior"),//menuvertical01
          fnmenuitem:actions.menuItemVertical01,
          fncreate:function(){
             $(".menu-vertical01").css({height:(values.screenHeight)+"px"});
              viewsModel.createMenuVerticalScroll({
                 nameid:"#menuvertical01 ", 
                 container:".box.menu-area",
                 containerComponent:".menu-vertical01",
                 items:".items",
                 item:".element-link",
                 scroll:".container-menu-scroll",
                 btnup:"#btn-slide-up",
                 btndown:"#btn-slide-down" 
             })
          }
        });
        
        viewsModel.createMenuHorizontal01({
            nameid:"#menuhorizontal01",
            container:".nav nav",
            pathTemplate:"src/components/menu-horizontal/",
            nametemplate:"tmplhorizontalmenu01",
            //behavior:$(".menu-horizontal").data("behavior")
            behavior:"menuhorizontal01",
            fnmenuitem:actions.menuItemHorizontal01
        });
       });
       
        var rtime;
        var timeout=false;
        var delta=300;
        var mytimer;
        function resizeEnd(){
            if (new Date()-rtime<delta){
              mytimer= setTimeout(resizeEnd, delta);
            }else{
                timeout=false;
             
                //alert("done resizing")
                 //values.screenHeight=$(values.containerMain).height();
                values.screenWidth=$(values.containerMain).width();
                console.log(window.innerHeight);
                alturaMain=window.innerHeight-47-47;
                console.log(alturaMain);
                values.screenHeight=alturaMain;
                //console.log(values.screenWidth);
                $(".menu-vertical-01").css({height:(values.screenHeight)+"px"});
                $(".menu-vertical01").css({height:(values.screenHeight)+"px"});
                $(".slide-container").css({height:(values.screenHeight-20)+"px"});
                   clearTimeout(mytimer);
            }
        }
        $(window).on("resize",function(event){
           rtime=new Date();
           if (timeout==false){
               timeout=true;
               mytimer=setTimeout(resizeEnd, delta);
           }
           /* 
          
           */
        });
   } 
    
});


