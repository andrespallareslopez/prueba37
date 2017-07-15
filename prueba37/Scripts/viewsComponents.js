/// <reference path="../../../typings/index.d.ts" />

;(function(ns,commponents,transformations,values){
    ns.createLayout=function(){
        values.containerMain=".container"
        values.screenHeight=$(values.containerMain).height();
        values.screenWidth=$(values.containerMain).width();
        
        
        var containerDataSet=".container";
        var header=new components.container({
            container:".container",
            nametemplate:$(containerDataSet).data("header")
        });
        
        var leftMenu=new components.container({
            nameid:"#menuvertical",
            container:".container",
            nametemplate:"leftaside01"
        });
        leftMenu.create(function(options){
                 var menuvertical=new components.verticalmenu({
                   nameid:"#menuvertical02",
                   container:".menu-area",
                   containerComponent:".menu-vertical-01",
                   nametemplate:$(containerDataSet).data("menu-vertical"),
                   //nametemplate:"tmplverticalmenu04",
                   url:values.host+"/api/grupos/",
                   fetchTransform:transformations.gruposToElements,
                   behavior:"menuvertical01",//$(".menu-area").data("behavior"),//menuvertical01
                   fncreate:function(options){
                    if (window.innerWidth>768){
                        headerHeight=$("header").height();
                        //console.log(headerHeight);
                        alturaMain=window.innerHeight-headerHeight;
                    }else{
                        alturaMain=window.innerHeight;
                    } 
                        $(".menu-vertical-01").css({height:(alturaMain)+"px"});
                        var scrollmenu=new components.menuVerticalScroll({
                        nameid:"#menuvertical02"
                        });
                        scrollmenu.initevent();
                   }  //end fncreate
                 });
        });
        var root=new components.container({
            nameid:"#root",
            container:".container",
            nametemplate:$(containerDataSet).data("root")
            //nametemplate:"root21"
        });
        root.create(function(options){
                
            var buttons=new components.container({
                container:"#root .actions",
                nametemplate:$(containerDataSet).data("nav-buttons"),
                //nametemplate:"navbuttons",
                behavior:"navbuttonsactionslayout01"
            });
            var menuHorizontal=new components.horizontalmenu({
              nameid:"#menuhorizontal01",
              container:"#root .actions",
              nametemplate:$(containerDataSet).data("menu-horizontal"),
              //nametemplate:"tmplhorizontalmenu01",
              //behavior:$(".menu-horizontal").data("behavior")
              behavior:"menuhorizontal01"
              //fnmenuitem:actions.menuItemHorizontal01
            });
            var slides=new components.slidePerspective({
                nameid:"#slidePerspective01",
                container:"#root .content",
                nametemplate:"slide04perspective"
            });
        });
        
        
        util.resizeDebounce(function(){
            var headerHeight;
            console.log(window.innerWidth);
              if (window.innerWidth>768){
                 headerHeight=$("header").height();
                 console.log(headerHeight);
                 alturaMain=window.innerHeight-headerHeight;
              }else{
                 alturaMain=window.innerHeight;
              }
             
              values.screenHeight=alturaMain;
              //console.log(values.screenWidth);
              $(".menu-vertical-01").css({height:(values.screenHeight)+"px"});
              $(".menu-vertical01").css({height:(values.screenHeight)+"px"});
              $(".slide-container").css({height:(values.screenHeight-20)+"px"});
            return window.innerHeight;
        });
    };
     //************************************* 
    ns.createRoot=function(){
     
     
      var root=new components.container({
       nameid:"#root",
       container:".container .pages", 
       nametemplate:$(".container").data("root")       
      });
      //*****************************************
      root.initevent=function(){
        values.containerMain=".main main"
        values.screenHeight=$(values.containerMain).height();
        values.screenWidth=$(values.containerMain).width();
        
        behaviors[$(".wrapper.page.root .nav nav").data("behavior")]();
         
          //behaviors.menuvertical0301();  
      };
      //****************************************
      root.create(function(options){
        var slideContainer=new components.container({
            nameid:"#slidecontainer01",
            container:".wrapper.root .content",
            nametemplate:"slide02"
        });
        slideContainer.create(function(options){
              //$(".slide-container").css({height:values.screenHeight+"px"});
              $(".slide-container").css({height:(values.screenHeight-20)+"px"});
        });
        
        var menuvertical=new components.verticalmenu({
          nameid:"#menuvertical02",
          container:".box.menu-area",
          containerComponent:".menu-vertical-01",
          nametemplate:"tmplverticalmenu04",
          url:values.host+"/api/grupos/",
          fetchTransform:transformations.gruposToElements,
          behavior:$(".wrapper.page.root .box.menu-area").data("behavior"),//menuvertical01
          //fnmenuitem:actions.menuItemVertical01,
          fncreate:function(options){

             $(".menu-vertical-01").css({height:(values.screenHeight)+"px"});
              //viewsModel.createMenuVerticalScroll({
                var scrollmenu=new components.menuVerticalScroll({
                   nameid:"#menuvertical02"
                   //container:"aside.box.menu-area"
                   //containerComponent:".menu-vertical-01",
                   //items:".items",
                   //item:".element-link",
                   //scroll:".container-menu-scroll",
                   //btnup:"#btn-slide-up",
                   //btndown:"#btn-slide-down"
                });
                scrollmenu.initevent();
             //})
          }  //end fncreate
        });
          var search=new components.container({
             nameid:"#frmsearch01",
             container:".nav nav",
             nametemplate:"templatesearch"
         });
         var singup=new components.container({
             nameid:"#frmlogin1",
             container:".nav nav",
             nametemplate:"templatelogin"
         });
         
         var footermenu=new components.container({
             nameid:"#footer01",
             container:".footer footer",
             nametemplate:"templatefooter01"
         });
         footermenu.create(function(options){
             var menupopup=new components.container({
                nameid:"#menupopup01",
                container:options.nameid+".footer-menu .panel-scroll-item",
                nametemplate:"templatemenupopup01"
             });
             menupopup.create(function(options){
                console.log("estoy dentro de menupopup create"); 
                var menuscroll=new components.panelScroll({
                    nameid:"#footer01"+" ",
                    container:".footer-menu",
                    item:".element-link.el"
                }); 
                menuscroll.initevent();
             });
         });
         
         
         var menuHorizontal=new components.horizontalmenu({
            nameid:"#menuhorizontal01",
            container:".nav nav",
            nametemplate:"tmplhorizontalmenu01",
            //behavior:$(".menu-horizontal").data("behavior")
            behavior:"menuhorizontal01",
            fnmenuitem:actions.menuItemHorizontal01
         });
       
            
            
            
            
            var rtime;
            var timeout=false;
            var delta=300;
            var mytimer;
            alturaMain=window.innerHeight-47-47;
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
            });
      });
         
     }
     //************************************** 
     ns.createRoot01=function(){
      var containerDataSet=".container .pages";  
      //************************************* 
      var root=new components.container({
       nameid:"#root",
       container:".container .pages", 
       nametemplate:$(".container").data("root")       
      });
      //*****************************************
      root.initevent=function(){
        values.containerMain=".main main"
        values.screenHeight=$(values.containerMain).height();
        values.screenWidth=$(values.containerMain).width();
        
        behaviors[$(".wrapper.page.root .nav nav").data("behavior")]();
         
          //behaviors.menuvertical0301();  
       };  //end root.initevent


     }  //end createRoot01
    
    ns.createMenuVertical01=function(options){
     
       var menuvertical=new components.verticalmenu(options);
       /*
       if (options.fncreate){
          menuvertical.create(options.fncreate); 
       }
       */
    };
    //************************************************************
    ns.createMenuHorizontal01=function(options){
        var menuHorizontal=new components.horizontalmenu(options);

    };
    ns.createMenuVerticalScroll=function(options){
        var scrollmenu=new components.menuVerticalScroll(options);
        scrollmenu.initevent();
    };
    ns.createSlidePanel=function(result){
       var slides=new components.slidePanels({
          container:".wrapper.root .content .slide-container .slide-items",
          data:result,
          nametemplate:"slide03"
       });   
    }
})(this.viewsModel||(this.viewsModel={}),this.components,this.transformations,this.values);