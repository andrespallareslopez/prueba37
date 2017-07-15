  /// <reference path="../../typings/index.d.ts" />
  
  (function(){
    var uxLayout= xtag.register("ux-layout",{
         /*
         content:'<div id="root" class="wrapper root" >'+
         '<nav id="menuhorizontal" class="actions" >'+ 
         '</nav>'+
         '<main>'+
         '<div class="content" >'+
         '</div>'+
         '</main>'+
         '<footer></footer>'+
         '</div>',
         */
        //content:'<div id="root" class="wrapper root" >'+
        // '</div>',
         lifecycle:{
             created:function(){
                 //this.innerHTML="";
                 //alert("estoy aqui");
                 //this.appendChild("hola mundo")
                 //this.textContent="hola mundo"
                 //$(this).text("hola mundo")
                 //$(this).append("<div style='color:red;'>hola mundo</div>")
                 
             },
             inserted:function(){
                /*
                var self=this;
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
                //console.log(this.innerHTML);    
             }
         }
     });
     //console.dir(uxLayout);
     xtag.register("ux-navigation",{
         content:'<nav id="menuhorizontal" class="actions" >'+ 
         '</nav>',
         lifecycle:{
             created:function(){
                 
             },
             inserted:function(){
                 var self=this;
                 var templ=new components.container({
                     container:".actions",
                     nametemplate:self.getAttribute("template"),
                     behavior:"navbuttonsactionslayout01"
                 });
             },
             removed:function(){},
             attributeChanged:function(attrName,oldValue,newValue){}
         },
         methods:{},
         accessors:{
             template:{
                 attribute:{},
                 get:function(){},
                 set:function(value){
                    this.xtag.data.template=value;
                 }
             }
         }
     });
     xtag.register("ux-aside",{
          
         lifecycle:{},
         methods:{},
         accessors:{}
     });
     xtag.register("ux-footer",{
       content: '<footer></footer>'
     });
     xtag.register("ux-content",{
       
        lifecycle:{
            created:function(){
                /*
                var self=this;
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
                      var content=self.render();
                       $(".wrapper.root").find(".content").append(content);
                });
                */
                //this.innerHTML=this.render();
                //$(".wrapper.root").append(content);
                //this.innerHTML=this.render();
                //console.log(this.getAttribute("template"));
                //console.log(this.getAttribute("items"));
                //var content=this.render();
                //console.log(content);
                //console.dir( $(".wrapper.root").find(".content"))
                
                //$(".wrapper.root").find(".content").append(content);
            },
            inserted:function(){
                 // console.dir( $(".wrapper.root").find(".content"))
                 //console.dir(this.xtag.data.items)
                 //console.dir(this.xtag);
                 //console.log(this.xtag.data.template);

            },
            removed:function(){},
            attributeChanged:function(attrName,oldValue,newValue){
            
            }
        },
        methods:{
           //metodos separados por comas
           /*
           render:function(){
               var content= '<main>'+
                '<div class="content" >'+
                '</div>'+
                '</main>'
               return content; 
           }
           */
        },
        accessors:{
            template:{
               attribute:{

               },
               get:function(){
                 //console.log(this);
               },
               set:function(value){
                 //console.log(value);
                 this.xtag.data.template=value;
               }
            },
            items:{
                attribute:{},
                get:function(){},
                set:function(value){
                    //console.log(value);
                    this.xtag.data.items=value;
                }
            }
        }
     });
  })()
 