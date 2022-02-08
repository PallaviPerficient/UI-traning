$(document).ready(function(){
    var $window = $(window);
    $(window).resize(function() {
        if($window.width() <= 768) {
            location.reload();
        } else if (768 < $window.width() < 1440) {
            location.reload();
        }
    });
    $("section, #java1, #python1, #Angular1").hide();
    $("#java").click(function(){
        $("#contentjava").slideDown();
        $("#contentpython, #contentAngular").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#python, #Angular").css({'display':'none'});
               $("#python1, #Angular1").show();
               $("#python, #Angular").css({"background-color":"blue", "border":"none"})

            }  
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });        
    $("#python").click(function(){
        $("#contentpython").slideDown();
        $("#contentjava, #contentAngular").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#Angular").css({'display':'none'});
               $("#Angular1").show();
               $("#Angular").css({"background-color":"blue", "border":"none"})
               $("#python").css({"background-color":"blue", "border":"none"})
               
            } 
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });
    $("#python1").click(function(){
        $("#python").show();
        $("#contentpython").slideDown();
        $("#contentjava, #contentAngular").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#python1, #Angular").css({'display':'none'});
               $("#Angular1").show();
            } 
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });
    $("#Angular1").click(function(){
        $("#python, #Angular").show();
        $("#contentAngular").slideDown();
        $("#contentjava, #contentpython").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#Angular1, #python1").css({'display':'none'});
               $("#python").css({"background-color":"blue"})
            } 
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });
    $("#Angular").click(function(){
        $("#contentAngular").slideDown();
        $("#contentjava, #contentpython").hide();
    }); 
});