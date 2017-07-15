/// <reference path="../../typings/index.d.ts" />


;(function(ns,values,$){
     ns.navbuttonsactionslayout01=function(){
       $("#btn-toggle-left").click(function(event){
          event.preventDefault();
          $(".wrapper").toggleClass("open-aside");
          //$(".container").toggleClass("section-open");
       });
       $("#btn-toggle-right").click(function(event){
          event.preventDefault();
          console.log("estoy en boton horizontal");
          $(".actions").find(".menu-horizontal").toggleClass("navbars-open");
       });

     }
     
     
     
     
     ns.navbuttonsactionsroot01=function(){
         //Estos botones estan preparados para otro layout

         
          //console.log("estoy dentro de navbuttonsactions");
          $("#btn-toggle-right").click(function(event){
            event.preventDefault();
            $(".menu-horizontal").toggleClass("navbars-open");    
          });
          
          $("#btn-toggle-left").click(function(event){
            event.preventDefault();
            $("#root main").toggleClass("section-open");
          });
          //*******************************************************
          $(document).on("click","#btn-form-search",function(evt){
            $(".form-search").toggleClass("open-search");        
            evt.preventDefault();     
          });
          $(document).on("click","#btn-form-close",function(evt){
         
            $(".form-search").toggleClass("open-search");
            evt.preventDefault();
          });
          $(document).on("click","#btn-toggle-sign-in",function(event){
             //console.log("estoy en sig-in");
             $(".form-login").toggleClass("open-login");
             event.preventDefault(); 
          });
          //*********************************************************
          $("#btn-footer-menu01").click(function(event){
            console.log("estoy en boton footer");
            event.preventDefault();
            if ($(".footer-menu").hasClass("expand-footer")){
                $(".footer-menu").removeClass("expand-footer");
            }else{
                $(".footer-menu").addClass("expand-footer");
            }
          });
     };
     ns.navbuttonactionspanel01=function(options){
         $(options.nameid+" "+"#btn-menu-aside").click(function(event){
            event.preventDefault();
            $(options.nameid+" "+"main").toggleClass("section-open");
            
         });
     }
     //****************************************
     ns.destroynavbuttonactionspanel01=function(options){

     }
     //****************************************
     ns.menuvertical0301=function(options){
          
            menuVerticalAccordion(".menu-vertical-01",options);
                   
     }
     //******************************************
     ns.menuvertical0304=function(options){
             menuVerticalAccordion(".menu-vertical-04",options);
           
     }
     //**************************************
     ns.menuvertical0501=function(options){
           var objlevel={"level-01":1,"level-02":2,"level-03":3,"level-04":4,"level-05":5};
           
           
           function procesarlevel(event,level){
                var numlevel=objlevel[level];
                var level1=numlevel;
               console.log("estoy en procesar level :"+level);
               if (numlevel>0){
                    $(event.target).next(".box-menu."+level).addClass("addwidth-box-menu-01");
                
                    $(".menu-vertical-0501").addClass("addwidth-box-menu-0"+numlevel);
                    $(".menu-vertical-0501").removeClass("addwidth-box-menu-0"+(numlevel-1));
                    $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-0"+(numlevel-1));
                    
                    $(event.target).toggleClass("expand");
                    var mytime1=setTimeout(function() {
                        for(var j=0;j<=numlevel-1;j++)(function(i){
                            
                            console.log(level1+" "+i);
                            
                            $(event.target).closest(".box-menu.level-0"+i).addClass("addwidth-box-menu-0"+level1);
                            if (i==0){
                                console.log("estoy en cero");
                            }else{
                               console.log("estoy en level=level-1");
                               --level1;
                               console.log(level1);
                               //level1=level-1;
                            };
                         
                        })(j);   //importante poner numlevel a privado o pasarlo como funcion a privado
                        
                        clearTimeout(mytime1);
                    },300);                   
                }  //end if
               }  //end procesar level
           /*
           function opensubmenu(event){

                event.preventDefault();
                console.log("Estoy en sub-menu"); 
                
                if($(event.target).next(".box-menu").data("level")=="level-04"){
                    console.log("Estoy en sub-menu nivel 04");
                   
                    $(event.target).next(".box-menu.level-04").addClass("addwidth-box-menu-01");
                    
                    $(".menu-vertical-0501").addClass("addwidth-box-menu-04");
                    $(".menu-vertical-0501").removeClass("addwidth-box-menu-03");
                    
                    
                    $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-03");
                    
                    $(event.target).toggleClass("expand");
                    var mytime1=setTimeout(function() {   
                       $(event.target).closest(".box-menu.level-00").addClass("addwidth-box-menu-04");
                       $(event.target).closest(".box-menu.level-01").addClass("addwidth-box-menu-04");
                       $(event.target).closest(".box-menu.level-02").addClass("addwidth-box-menu-03");
                       $(event.target).closest(".box-menu.level-03").addClass("addwidth-box-menu-02");
                       clearTimeout(mytime1);
                    },300);

                }
                if ($(event.target).next(".box-menu").data("level")=="level-03"){
                    console.log("Estoy en sub-menu nivel 03");
                    $(event.target).next(".box-menu.level-03").addClass("addwidth-box-menu-01");
                    
                    $(".menu-vertical-0501").addClass("addwidth-box-menu-03");
                    $(".menu-vertical-0501").removeClass("addwidth-box-menu-02");
                    
                    
                    $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-02");
                    
                    $(event.target).toggleClass("expand");
                    
                    var mytime1=setTimeout(function() {
                       
                       $(event.target).closest(".box-menu.level-00").addClass("addwidth-box-menu-03");
                       $(event.target).closest(".box-menu.level-01").addClass("addwidth-box-menu-03");
                       $(event.target).closest(".box-menu.level-02").addClass("addwidth-box-menu-02");
                       clearTimeout(mytime1);
                    },300); 
                
                }
                if ($(event.target).next(".box-menu").data("level")=="level-02"){
                    console.log("Estoy en sub-menu nivel 02"); 
                    
                    $(event.target).next(".box-menu.level-02").addClass("addwidth-box-menu-01");
                    
                    $(".menu-vertical-0501").addClass("addwidth-box-menu-02");
                    $(".menu-vertical-0501").removeClass("addwidth-box-menu-01");
                
                    
                    $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-01");
                    
                    $(event.target).toggleClass("expand");
                    
                    var mytime1=setTimeout(function() {
                       
                       $(event.target).closest(".box-menu.level-00").addClass("addwidth-box-menu-02");
                       $(event.target).closest(".box-menu.level-01").addClass("addwidth-box-menu-02");
                       clearTimeout(mytime1);
                    },300);
                }
                if ($(event.target).next(".box-menu").data("level")=="level-01"){
                    console.log("Estoy en sub-menu nivel 01");
                    
                    $(".menu-vertical-0501").toggleClass("addwidth-box-menu-01");
                    
                    var mytime1=setTimeout(function() {
                       $(event.target).closest(".box-menu.level-00").addClass("addwidth-box-menu-01");
                       clearTimeout(mytime1);
                    },300);
                    
                    $(event.target).toggleClass("expand");
                    
                }
                if ($(event.target).next(".box-menu").data("level")=="level-00"){
                     console.log("Estoy en sub-menu nivel 00"); 
                }
                
          }
          */
          /*
          function openmenu(event){
                console.dir($(event.target));
                console.dir($(event.target).closest(".box-menu").data("level"));
                $(".menu-vertical-0501").toggleClass("addwidth-box-menu-01");
                $(event.target).first().toggleClass("expand");  
          }
          */
          function closelevel(event,level){
               event.preventDefault();
                console.log("item back elemen---");
               console.log($(event.target).closest(".box-menu").data("level"));
                var numlevel=objlevel[level];
                var level1=numlevel;
                $(".menu-vertical-0501").removeClass("addwidth-box-menu-0"+numlevel);
                if (numlevel>1){  
                    $(".menu-vertical-0501").addClass("addwidth-box-menu-0"+(numlevel-1));
                }
                for(var j=0;j<=numlevel-1;j++)(function(i){
                    $(event.target).closest(".box-menu.level-0"+i).removeClass("addwidth-box-menu-0"+level1);
                    $(event.target).closest(".box-menu.level-0"+i).addClass("addwidth-box-menu-0"+(level1-1));
                    if (i==0){
                        console.log("estoy en cero");
                    }else{
                        console.log("estoy en level=level-1");
                        --level1;
                        console.log(level1); 
                    };
                })(j);
                
                $(event.target).closest(".box-menu.level-0"+numlevel).removeClass("addwidth-box-menu-01");
                $(event.target).closest(".box-menu.level-0"+numlevel).parent().find(".element-link.text").first().toggleClass("expand");
          
          }
          
          function closesubmenu(event){
               event.preventDefault();
               console.log("item back elemen---");
               console.log($(event.target).closest(".box-menu").data("level"));
               if ($(event.target).closest(".box-menu").data("level")=="level-04"){
                     $(".menu-vertical-0501").removeClass("addwidth-box-menu-04");
                     $(".menu-vertical-0501").addClass("addwidth-box-menu-03");
                     
                     $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-04");
                     $(event.target).closest(".box-menu.level-00").addClass("addwidth-box-menu-03");
                     
                     
                     $(event.target).closest(".box-menu.level-01").removeClass("addwidth-box-menu-04");
                     $(event.target).closest(".box-menu.level-01").addClass("addwidth-box-menu-03");
                     
                     $(event.target).closest(".box-menu.level-02").removeClass("addwidth-box-menu-03");
                     $(event.target).closest(".box-menu.level-02").addClass("addwidth-box-menu-02");
                     //$(event.target).closest(".box-menu.level-02").parent().find(".element-link.text").first().toggleClass("expand"); 
                     
                     $(event.target).closest(".box-menu.level-03").removeClass("addwidth-box-menu-02");
                     $(event.target).closest(".box-menu.level-03").addClass("addwidth-box-menu-01");

                     $(event.target).closest(".box-menu.level-04").removeClass("addwidth-box-menu-01");
                     $(event.target).closest(".box-menu.level-04").parent().find(".element-link.text").first().toggleClass("expand"); 

               }
               if ($(event.target).closest(".box-menu").data("level")=="level-03"){
                     $(".menu-vertical-0501").removeClass("addwidth-box-menu-03");
                     $(".menu-vertical-0501").addClass("addwidth-box-menu-02");
                     
                     $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-03");
                     $(event.target).closest(".box-menu.level-00").addClass("addwidth-box-menu-02");
                     
                     
                     $(event.target).closest(".box-menu.level-01").removeClass("addwidth-box-menu-03");
                     $(event.target).closest(".box-menu.level-01").addClass("addwidth-box-menu-02");
                     
                     

                     $(event.target).closest(".box-menu.level-02").removeClass("addwidth-box-menu-02");
                     $(event.target).closest(".box-menu.level-02").addClass("addwidth-box-menu-01");
                     //$(event.target).closest(".box-menu.level-02").parent().find(".element-link.text").first().toggleClass("expand"); 
                     
                     $(event.target).closest(".box-menu.level-03").removeClass("addwidth-box-menu-01");
                     $(event.target).closest(".box-menu.level-03").parent().find(".element-link.text").first().toggleClass("expand"); 
               }
               if ( $(event.target).closest(".box-menu").data("level")=="level-02"){
                     
                     $(".menu-vertical-0501").removeClass("addwidth-box-menu-02");
                     $(".menu-vertical-0501").addClass("addwidth-box-menu-01");

                     $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-02");
                     $(event.target).closest(".box-menu.level-00").addClass("addwidth-box-menu-01");


                     $(event.target).closest(".box-menu.level-01").removeClass("addwidth-box-menu-02");
                     $(event.target).closest(".box-menu.level-01").addClass("addwidth-box-menu-01");
                     
                   

                     $(event.target).closest(".box-menu.level-02").removeClass("addwidth-box-menu-01");
                     $(event.target).closest(".box-menu.level-02").parent().find(".element-link.text").first().toggleClass("expand");
                     
               }
               if ($(event.target).closest(".box-menu").data("level")=="level-01"){
                     
                     $(".menu-vertical-0501").removeClass("addwidth-box-menu-01");

                     $(event.target).closest(".box-menu.level-00").removeClass("addwidth-box-menu-01");

                     $(event.target).closest(".box-menu.level-01").removeClass("addwidth-box-menu-01");
                     $(event.target).closest(".box-menu.level-01").parent().find(".element-link.text").first().toggleClass("expand");
                   
                   
               }
          }
         
          $(document).on("click",".menu-vertical-0501 .sub-menu .back-element",function(event){
              closelevel(event,$(event.target).closest(".box-menu").data("level"))
              //closesubmenu(event);
           }); 
           //$(document).on("click",".menu-vertical-0501 .menu .sub-menu .back-element",function(event){
           //   closesubmenu(event);
          // }); 
          $(document).on("click",".menu-vertical-0501 .sub-menu>.parent>.element-link.text",function(event){
              //opensubmenu(event);
              procesarlevel(event,$(event.target).next(".box-menu").data("level")) ;
          });
          $(document).on("click",".menu-vertical-0501 .menu>.parent>.element-link.text",function(event){
              //openmenu(event);
          });
     }
     //*************************************
     ns.menuvertical01=function(options){
        var containerMenu=options.containerComponent;
      
        if (options.nameid){
           containerMenu=options.nameid+options.containerComponent;
        }  
        menuVerticalAccordion(containerMenu,options);
        
     };
     ns.destroymenuvertical01=function(options){

     }
     //**************************************
     ns.footeractions01=function(options){
        $("#btn-footer-menu01").click(function(event){
            console.log("estoy en boton footer");
            event.preventDefault();
            if ($(".footer-menu").hasClass("expand-footer")){
                $(".footer-menu").removeClass("expand-footer");
            }else{
                $(".footer-menu").addClass("expand-footer");
            }
        });
     };
     ns.destroyfooteractions01=function(options){
     
     }
     //*************************************
     ns.menuhorizontal01=function(options){
          
          if (!options.nameid){
              options.nameid="";
          }
          $(document).on("click",options.nameid+".menu-horizontal>.pr>.gr",function(event){
           //console.log("estoy en click horizontal");
            event.preventDefault();        
            $(event.target).toggleClass("expand");
         });
         $(document).on("click",options.nameid+".menu-horizontal .sb .bk",function(event){
            event.preventDefault();
            $(this).parent().parent().find(".gr").toggleClass("expand");   
         });
         /*
         $(document).on("click",".menu-horizontal>.element.parent>.element-link",function(event){
           //console.log("estoy en click horizontal");
            event.preventDefault();        
            $(event.target).toggleClass("expand");
         });
         $(document).on("click",".menu-horizontal .sub-menu .back-element",function(event){
            event.preventDefault();
            $(this).parent().parent().find("a").toggleClass("expand");   
         });
         */
     };
     ns.destroymenuhorizontal01=function(options){

     }
     //***********************************
     ns.listaccordion01=function(options){
         $(".list-acordion .gr").on("click",function(event){
            //console.log("estoy en el evento click");  
            if ($(event.target).hasClass("expand")){
                $(event.target).removeClass("expand");
            }else{
                $(event.target).addClass("expand");
            }
         });
     }
     ns.destroylistaccordion01=function(options){

     }
     //********************************************
     ns.destroyEventsSlidePanel=function(options){
          
            (function(options){
                options.container=options.container||".slide-container";
                options.btnleft=options.btnleft||".slide-button.left";
                options.btnright=options.btnright||".slide-button.right";
                options.items=options.items||".slide-items";
                options.slides=options.slides||"ul";
                options.slide=options.slide||"li";
                options.slideContainer=options.slideContainer||".list-grp-buttons";
                options.slide=options.ctrlnav=".slide-controls";
            
            })(options);
              $(options.container+" "+options.btnright).off("click");
              $(options.container+" "+options.btnleft).off("click");
            
     }
     //************************************************************
     function menuVerticalAccordion(containerMenu,options){
         
         console.log(containerMenu);
         $(containerMenu).on("click",".sb .el,.itm .el",function(event){
              //event.preventDefault();
              
              console.log("Estoy en sub-element");
                                            //".current-element"
              $(containerMenu+" .sb .el,"+containerMenu+" .itm .el").removeClass("current-element");
              $(event.target).addClass("current-element");
              
              
         });
         
         $(containerMenu).on("click",".pr>.gr,.sb .bk",function(event){
                    event.preventDefault();
                    
                        console.log("estoy en menu");
                        //console.dir($(this).text());
                        //$().toggleClass("expand");
                        //console.dir(event.target);
                        $(containerMenu+" .pr .gr").removeClass("current-menu");
                        if ($(containerMenu+" .pr .gr").hasClass("expand")){
                          //console.log(event.target.innerText);
                          //console.dir( $("containerMenu .parent .element-link.expand")[0].innerText);    
                            if(event.target.innerText===$(containerMenu+" .pr .gr.expand")[0].innerText){
                                console.log("son iguales");
                                $(containerMenu+" .pr .gr").removeClass("expand"); 
                            }else{
                                console.log("no son iguales");
                                $(containerMenu+" .pr .gr").removeClass("expand"); 
                                mytimer=setTimeout(function() {
                                    $(event.target).addClass("current-menu"); 
                                    $(event.target).addClass("expand");
                                    clearTimeout(mytimer);
                                }, 300);
                            }
                            
                        }else{
                              mytimer=setTimeout(function() {
                                $(event.target).addClass("current-menu");
                                $(event.target).addClass("expand");
                                clearTimeout(mytimer);
                            },200);
                        }
        });
         
     }
    
})(this.behaviors=this.behaviors||{},this.values,jQuery);