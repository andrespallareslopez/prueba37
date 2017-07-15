/// <reference path="../../../typings/index.d.ts" />

;(function(ns,values,$){
       var slidesp;
       var p1;
       //var resultdata;
    ns.loadProducstsonSlider=function(path){
       onLoadProductsSlider(path);
    };   
    ns.menuItemVertical01=function(event){
        console.log("estoy en menuitem vertical");
        
        //console.dir($(event.target));
        var ref=$(event.target).attr("href").replace("#","");
        
        //console.log(ref.replace("#",""));
        
        if (ref){
           onLoadProductsSlider(ref);
           /*
           p1=util.http.get(values.host+ref);
           p1.then(function(result){
               //resultdata=result;
              $(".wrapper.root .content .slide-container .slide-items").empty();
              //$(".wrapper.root .content .slide-container .slide-items ul").remove();  
              //behaviors.destroyEventsSlidePanel({});
              //console.dir(result);
              if (slidesp){
                console.log("objecto slide ya creado");
               // console.dir(slidesp.options.fncreate);
                slidesp.render(result,"reload"); 
              }else{
                slidesp=new components.slidePanels({
                 container:".wrapper.root .content .slide-container .slide-items",
                 data:result,
                 nametemplate:"slide03"
                });
              }  
           });
           */
        }  //if ref

           // $(window).off("resize");  //importante quitar los eventos
                                     //porque sino luego se repiten
                                     //y nos da efectos secundarios
            /*
            var rtime;
            var timeout=false;
            var delta=300;
            var mytimer;
            function resizeEnd(){
              if (new Date()-rtime<delta){
                mytimer=setTimeout(resizeEnd,delta);
              } else {
                timeout=false;
              
                //calcularmedidas.apply(self,[self.options]);
                $(".wrapper.root .content .slide-container .slide-items").empty();
                behaviors.destroyEventsSlidePanel({ });
                //calcularslides.apply(self,[]);
                var mytimer1;
                mytimer1=setTimeout(function() {
                     slidesp.render();
                     clearTimeout(mytimer1);
                }, 300);
               
                  clearTimeout(mytimer);
              }
            };
            $(window).on("resize",function(evt){
                //console.log("estoy dentro de resize");
                rtime=new Date();
                if (timeout==false){
                    timeout=true;
                    mytimer=setTimeout(resizeEnd,delta);
                }
                
            });
            */

    };
    ns.menuItemHorizontal01=function(event){
         console.log("estoy en item horizontal");
                        event.preventDefault();
                        //console.log(event.target);
                        //******************************
                        //console.log($(event.target).attr("href"))
                        //console.dir(event.target);
                        $(event.target).addClass("no-active");
                        
                        var trozos=util.arrayofhash($(event.target).attr("href"));
                        //console.log(trozos);
                        if (trozos.length>1){
                            //aqui trozos[1] se utiliza para poner el id del template
                            var nameid="#"+trozos[1];
                            var panel1=new components.panel({
                              nameid:"#"+trozos[1],
                              container:".container .pages",
                              nametemplate:"templatepaneltable",
                              namebuttonback:"#btn-toggle-back-3",
                              behavior:"navbuttonactionspanel01"
                            });
                            
                            //console.log(panel1.options);
                            panel1.create(function(options){
                                 //$(options.nameid+" "+".box.menu-area").css({height:(values.screenHeight)+"px"});
                                 // $(options.nameid+" "+".box.menu-area").css({width:(200)+"px"});
                                 console.log("estoy en panel create");
                                 //console.log(options);
                                 //$("#panelprogreso01").removeClass("show");
                                 var menuvertical=new components.verticalmenu({
                                       nameid:options.nameid+" ",//importante poner esta separacion +" ", porque ponemos el id del panel y a la hora de monstar un seletector seria #template .menu-vertical01
                                                                //otras veces nos convendra #idmenu.menu-vertical01 porque hemos puesto el id del menu vertical 
                                       container:options.nameid+" "+".box.menu-area",
                                       containerComponent:".menu-vertical01",
                                       nametemplate:"tmplverticalmenu01",
                                       behavior:"menuvertical01",
                                       fncreate:function(options){
                                            console.log("estoy dentro de fncreate ---")
                                            viewsModel.createMenuVerticalScroll({
                                            nameid:options.nameid+" ", 
                                            //container:options.nameid+" "+"aside.box.menu-area",
                                            containerComponent:".menu-vertical01"  //podemos carcar un menu distinto diferenciandolo por clase
                                            //items:".items",
                                            //item:".element-link",
                                            //scroll:".container-menu-scroll",
                                            //btnup:"#btn-slide-up",
                                            //btndown:"#btn-slide-down" 
                                          })
                                       } 
                                });

                                 var contenedor=components.container.extend({
                                    initevent:function(){
                                         console.log("estoy dentro de contenedor initvent *****");
                                         //console.dir(this.options);
                                         behaviors.listaccordion01(this.options);
                                         /*
                                         $(".list-acordion .element-link").on("click",function(event){
                                            console.log("estoy en el evento click");  
                                            if ($(event.target).hasClass("expand")){
                                                $(event.target).removeClass("expand");
                                            }else{
                                                $(event.target).addClass("expand");
                                            }
                                         });
                                         */
                                         var timer1=setTimeout(function() {
                                              $(event.target).removeClass("no-active");
                                              clearTimeout(timer1);
                                         }, 300);
                                    }
                                 });
                                contenedor=new components.container(
                                    {
                                        container: options.nameid+" "+".content"+" "+" .panel-scroll .panel-scroll-content .panel-scroll-item",
                                        nametemplate:"list02"
                                    }
                                );
                                //establecemos el scroll despues de cargar los datos
                                contenedor.create(function(options){
                                    var scrollPanel=new components.panelScroll({
                                        nameid:"#"+trozos[1]+" ",
                                        container:".main main",
                                        //containerComponent:".panel-scroll",
                                        //scroll:".panel-scroll-content",
                                        //items:".panel-scroll-item",
                                        //item:".list-acordion .element-link",
                                        //btnup:"#btn-slide-up",
                                        //btndown:"#btn-slide-down",
                                        fnClickElement:clickElementAccordion
                                    });

                                    scrollPanel.initevent();
                                });
                            });  //end panel1.create
                        };

    }
    var onLoadProductsSlider=function(path){
          p1=util.http.get(values.host+path);
          
           p1.then(function(result){
               //resultdata=result;
              $(".wrapper.root .content .slide-container .slide-items").empty();
              //$(".wrapper.root .content .slide-container .slide-items ul").remove();  
              //behaviors.destroyEventsSlidePanel({});
              //console.dir(result);
              if (slidesp){
                console.log("objecto slide ya creado");
               // console.dir(slidesp.options.fncreate);
                slidesp.render(result,"reload"); 
              }else{
                slidesp=new components.slidePanels({
                 container:".wrapper.root .content .slide-container .slide-items",
                 data:result,
                 nametemplate:"slide03"
                });
              }  
           });
    }
    var clickElementAccordion=function(options){
        var self=this;
         console.log("estoy dentro de click element");
        //console.log(self.options.containerComponent);
        //console.log(self.options.nameid+self.options.item);
        $(self.options.nameid+self.config.item).click(function(event){
            //hay que poner un retardo porque en el mismo momento del click
            //la altura aun no esta establecida ,importante darle mas de 100ms
            var mytimer=setTimeout(function(){
                 console.log("estoy dentro de click list-acordion");
                
                
                 self.calcularAltura.apply(self,[]);
                 //self.menuHeightScroll=$(self.options.nameid+self.config.containerComponent+" "+self.config.scroll).height();
                 //self.menuHeightItems=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).height();
                 //self.menuHeight=self.menuHeightItems-self.menuHeightScroll;
                 
                 self.doclick=true
                 console.log(self.menuHeightScroll);
                 console.log(self.menuHeightItems);
                 console.log(self.menuHeight);
                 //console.log(self.$holder);
                 self.scrolltop=self.$holder[0].scrollTop;
                 self.movesum=-(self.$holder[0].scrollTop);
                 console.log(self.movesum);
                 self.deactivateButtons.apply(self,[]);
                 self.activateButtons.apply(self,[]);
               
                 clearTimeout(mytimer);
               if (self.doclick){
                  self.$holder[0].scrollTop=self.scrolltop;
                  self.doclick=false;
               }
               
            },150);
        });
    }
})(this.actions||(this.actions={}),this.values,jQuery);