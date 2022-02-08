$(document).ready(function() {
    $("#c1mobile,#c2mobile,#c3mobile").hide();
    // $(window).resize(function() {
    //     var isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;
    //     if (isMobile) {
            
    //     } else {



    //     }

    // });



    // $("#colosseum").click(function(){
    //     $("#contentColosseum").slideDown();
    //     $("#contentChina, #contentTajMahal").hide();
    //     function responsive(maxWidth) {

    //         if (maxWidth.matches) { 

    //            $("#china, #tajMahal").css({'display':'none'});

    //            $("#china1, #tajMahal1").show();

    //            $("#china, #tajMahal").css({"background-color":"rgb(72, 224, 235)", "border":"none"})

    //         } 

    //     }

    //         var maxWidth = window.matchMedia("(max-width: 600px)");   

    //         responsive(maxWidth);

    //         maxWidth.addEventListener(responsive);

    // }); 
    $("#c1").click(function(){
        $("panel").slideDown();
        $("#panel1,#panel2").hide();
            function responsive(maxWidth){
                if(maxWidth.matches){
                    $("#c2,#c3").css({'display':'none'});
                    $("#c2mobile,c3mobile").show();
                    $("#c2,#c3").css({"background-color":"rgb(72, 224, 235)", "border":"none"})
                }
            }
            var maxWidth = window.matchMedia("(min-width: 600px)");   

            responsive(maxWidth);

            maxWidth.addEventListener(responsive);
    });                
    // $("#c1").click(function() {
    //     $("#panel").slideDown();
    //     $("#panel1,#panel2").hide();

    // });

    $("#c2").click(function() {
        $("#panel1").slideDown();
        $("#panel,#panel2").hide();
    });

    $("#c3").click(function() {
        $("#panel2").slideDown();
        $("#panel1,#panel").hide();

    });
});