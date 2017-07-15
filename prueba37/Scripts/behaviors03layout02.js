/// <reference path="../../typings/index.d.ts" />


;(function(ns,values,$){
    
    ns.navButtons03layout02=function(){
         //console.log("estoy dentro de navbuttonsactions");
          $("#btn-toggle-right").click(function(event){
            event.preventDefault();
            $(".menu-horizontal").toggleClass("navbars-open");    
          });
          
          $("#btn-toggle-left").click(function(event){
            event.preventDefault();
            $(".main-body").toggleClass("section-open");
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
    }
    
})(this.behaviors=this.behaviors||{},this.values,jQuery);    