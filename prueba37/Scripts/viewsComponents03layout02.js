/// <reference path="../../../typings/index.d.ts" />

;(function(ns,commponents,transformations,values){
   
   ns.viewModel03layout02=function(){
       //console.log("estoy en 03layout02");
       var header=new components.container({
           container:".container .pages",
           pathTemplate:"src/components/header/header01/",
           nametemplate:"header01"

       });
       var layout=new components.container({
           container:".container .pages",
           pathTemplate:"src/components/layouts/03layout02/",
           nametemplate:"03layout02"
       });
       layout.initevent=function(){
           //navButtons03layout02
           behaviors[$(".main-body .wrapper.page.root .nav nav").data("behavior")]();
       };
       layout.create(function(options){
           var menuhorizontal=new components.container({
               container:".container .pages .nav nav",
               pathTemplate:"src/components/menu-horizontal/",
               nametemplate:"tmplhorizontalmenu01"
           });
           var menuarea=new components.container({
               container:".container .pages .main-body .wrapper",
               typeInsertHTML:components.enumInsertHTML.before,
             //typeInsertHTML
               pathTemplate:"src/components/layouts/",
               nametemplate:"leftaside01"
           });
           var menuAreaObserver=new components.container({
              container:".container .pages .main-body"
           });
           menuAreaObserver.promise.then(function(mutation){
               console.log("estoy dentro de menu area observer promise");
               var menuvertical=new components.container({
                  //nameid:"#menuvertical",
                  container:".container .menu-area",
                  containerComponent:".menu-vertical01",
                  pathTemplate:"src/components/menu-vertical/03Menu-vertical01/",
                  nametemplate:"03Menu-vertical01",
                  behavior:"menuvertical01"
               });
               menuvertical.create(function(options){
                 
              });
           });
       });
   }
   
})(this.viewsModel||(this.viewsModel={}),this.components,this.transformations,this.values);  

