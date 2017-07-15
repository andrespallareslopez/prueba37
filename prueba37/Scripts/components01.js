/// <reference path="../../../typings/index.d.ts" />

;(function(ns,util,behaviors,$){
     ns.enumInsertHTML={
         before:1,
         normal:2,
         after:3
     };
     ns.container=(function(){ 
       
            return function(options){
            //var observer;
            //var allparams=[].slice.call(arguments);
            //console.log(allparams);
            //**********************
            //otra manera de comprobar el parametro
            // if (options){}else{}
     
            //importante comprobar si options existe,y entonces lanzar el init
            //porque si no cuando instanciamos el objeto container en
            //en el prototype de menuvertical,panel,etc..., con el constructor vacio nos interesa que no
            //haga nada
            if (options){
                this.init(options);
            }
        };
     })();
     ns.container.extend=(function(){
         
         return function(objeto){
            //console.log("estoy dentro de extend");
            //console.dir(this);
            util.extend(objeto,ns.container.prototype);      
         };
         
     })();
     ns.container.prototype.init=function(options){
            (function(config){
                config.renderName=config.renderName||"rendertemplate";
            })(this.config||(this.config={}));

            (function(options){
              var elemento;
              options.container=options.container||".container";
              options.containerComponent=options.containerComponent||undefined;
              elemento=document.querySelector(options.container);
              options.element=options.element||elemento;
              options.observerConfig=options.observerConfig||{attributes:true,
                                                              childList:true,
                                                              //subtree:true,
                                                              characterData:true
                                                              //attributes:true
                                                              //attributeOldValue:true
                                                              
                                                              };
              options.conected=options.conected||true;
              //options.datosjson=options.datosjson||"";
              options.behavior=options.behavior||undefined;
              options.fnbehavior=options.fnbehavior||undefined;
              options.fncreate=options.fncreate||undefined;
              options.url=options.url||undefined;
              options.fetchRemote=options.fetchRemote||              
              (function(url){
                  if (url){
                        return util.http.get(url)
                  };                
              })(options.url);
                    //fetchTransform
              options.fetchTransform=options.fetchTransform||undefined;
              options.data=options.data||undefined;
              options.nameid=options.nameid||"";
              options.nametemplate=options.nametemplate||undefined;
              options.pathTemplate=options.pathTemplate||values.pathTemplate;
              options.typeInsertHTML=options.typeInsertHTML||ns.enumInsertHTML.normal;
              options.callbackObserver=options.callbackObserver||function(mutation){
              
              //console.log("Estoy dentro de callback por defecto");
              };
              

              //options.promiseObserver=Promise;                                              
            })(options);
            
            this.options={};
            util.extend(options,this.options); 
               //console.dir(this.options);
               
            this.promise=new Promise(function(resolve,reject){
               
               this.observer=new MutationObserver(function(mutations){
                  mutations.forEach(function(mutation){
                      //console.log("estoy dentro de mutation");
                      //console.dir(mutation);
                    
                    //this.options.callbackObserver(mutation);
                    // console.log(this.options.conected);
                    resolve(mutation);                      
                    
                    if (this.options.conected){
                      //console.log(this.observer.disconnect());
                      this.observer.disconnect();
                      
                      //console.log("observer desconectado")
                    }
                  }.bind(this));
                }.bind(this)); 
            }.bind(this));
            
            if (this.options.element){
               this.observer.observe(this.options.element,this.options.observerConfig);
               this.render();
            }else{
               console.log(options);
               console.log("error al crear el observer, objeto this.options.element vacio, el container no esta bien establecido"); 
            };
     };
     
     ns.container.prototype.create=function(fncreate){
         //console.log(fncreate);
         this.options.fncreate=fncreate;
     }
     
     ns.container.prototype.render=function(data){
        this.options.datatemplate=undefined;
        if (data){
            this.options.data=data;
        }  
          //console.log(this.options.fetchRemote);
        if (this.options.data) {
            this.options.datatemplate=this.options.data;
        }else if (this.options.fetchRemote){
            this.options.datatemplate=this.options.fetchRemote;
        } 
        //importante comprobar si tiene name template
        if (this.options.nametemplate){
            util[this.config.renderName].apply(this,[this.options.datatemplate,this.options.nametemplate]);
        }  
       
     };
      
     ns.verticalmenu=(function(){
         return function(options){
             //options.initevent=this.initevent();
             //console.dir(options);
             this.init(options);      
         };
     })();
     
     ns.verticalmenu.prototype=new ns.container();
     
     ns.verticalmenu.prototype.initevent=function(){
        var self=this;
        console.log("estoy dentro de initevents vertical");
          var $menuv;
          
               $menuv=$(self.options.container+" .el");
               $menuv.on("click",function(event){
                  // event.preventDefault();
                  if (self.options.fnmenuitem){
                      self.options.fnmenuitem(event);
                  }    
               });
     };
     
     ns.horizontalmenu=(function(){
        return function(options){
          //options.initevent=this.initevent();
          this.init(options);
        };
     })();
     
     ns.horizontalmenu.prototype=new ns.container();
     
     ns.horizontalmenu.prototype.initevent=function(){
         var self=this;
         console.log("estoy dentro de initevent horizontal");
         //var $menuh= $(".menu-horizontal .sub-menu .element-link,.element.item>.element-link");
         var $menuh=$(self.options.container+" .el");
         
         $menuh.on("click",function(event){
             console.log("estoy dentro");
            //$("#panelprogreso01").addClass("show");
             if (self.options.fnmenuitem){
               self.options.fnmenuitem(event);
             } 
         });
         
     };
     
     ns.panel=(function(){
         return function(options){
            options.callbackObserver=function(mutation){
                
                this.buttonback();
                this.starttransition();
          
                /*
                this.observer.disconnect();
                this.options.conected=false;
                this.create(this.fncreate(this.options));
                */
            }.bind(this); 
            this.init(options);
         };
     })();
     
     ns.panel.prototype=new ns.container();
     
     ns.panel.prototype.render=function(){
         self=this;
         console.log("estoy dentro de render panel");
         this.options.datatemplate=undefined;
         if (this.options.nameid){
            //Se crea un id="#..." dinamico muy util en los panel 
            this.options.datatemplate={id:self.options.nameid.replace("#","")}; //esto es para cuando utilizamos el template panel poner un id dinamicamente sin '#' en el id del template
         };

         util.rendertemplate.apply(this,[this.options.datatemplate,this.options.nametemplate]);
         
     };
     ns.panel.prototype.starttransition=function(){
        var self=this;
         
        if ($(self.options.nameid).hasClass("animacion")){
            var mytimer=setTimeout(function() {
              $(self.options.nameid).removeClass("animacion");

               $(self.options.container+" .wrapper.root").removeClass("out");
               //$("#menuvertical").removeClass("out");
              clearTimeout(mytimer);
            }, 50); 
        }else{
            var mytimer=setTimeout(function() {
              $(self.options.nameid).addClass("animacion");
               var mytimer1=setTimeout(function() {
                    $(self.options.container+" .wrapper.root").addClass("out");
                   // $("#menuvertical").addClass("out");
                    clearTimeout(mytimer1);
               }, 320);
               clearTimeout(mytimer);
            },50);
        };
     };
     ns.panel.prototype.buttonback=function(){
         var self=this;
          $(document).on("click",self.options.nameid+" "+self.options.namebuttonback,function(event){
            console.log("estoy en button back");
            self.starttransition();
            var mytimer=setTimeout(function() {
              $(document).off("click",self.options.nameid+" "+self.options.namebuttonback);
              if (self.options.fndestroy){
                  self.options.fndestroy();
              }  
              $(self.options.nameid).remove();
              
              clearTimeout(mytimer);
               //$(document).off("click",self.options.nameid+" "+self.options.namebuttonback);  
                 self=null;
            }, 400);
           
          });
     };
     ns.panel.prototype.create=function(fncreate){
         this.options.fncreate=fncreate;
     };
     
})(this.components=this.components||{},this.util,this.behaviors,jQuery);  //podriamos poner simplemente this, y no definir components
