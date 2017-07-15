
$(function () {
    //alert("estoy aqui");
   

    behaviors.navButtons03layout02();
    behaviors.menuvertical01({
        nameid: "#menu-vertical02",
        containerComponent: ".menu-vertical01"
    });
    var scrollmenu = new components.menuVerticalScroll({
        nameid: "#menu-vertical02",
        containerComponent:".menu-vertical01"
    });
    scrollmenu.initevent();
   


    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $("#input-search").on("keyup", debounce(function (e) {
             
        //console.dir(e);
        console.dir($("#input-search").val());
    },300));
    
});