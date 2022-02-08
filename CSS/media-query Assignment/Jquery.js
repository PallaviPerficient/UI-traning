$(document).ready(function() {
    $("section").hide();
    $(".c").click(function() {
        $("#c").slideDown();
        $("#c-plus,#java ,#c-hash,#python,#Angular,#ionic,tech").hide();

    });
    $(".tech").click(function() {
        $("#tech").slideDown();
        $("#java ,#c,#c-hash,#python,#Angular,#ionic").hide();
    });

    $(".c-plus").click(function() {
        $("#c-plus").slideDown();
        $("#java ,#c,#c-hash,#python,#Angular,#ionic,tech").hide();

    });
    $(".java").click(function() {
        $("#java").slideDown();
        $("#c-plus,#c,#c-hash,#python,#Angular,#ionic,tech").hide();

    });
    $(".c-hash").click(function() {
        $("#c-hash").slideDown();
        $("#c-plus,#java ,#c,#python,#Angular,#ionic,tech").hide();
    });
    $(".python").click(function() {
        $("#python").slideDown();
        $("#c-plus,#java ,#c,#c-hash,#Angular,#ionic,tech").hide();

    });
    $(".Angular").click(function() {
        $("#Angular").slideDown();
        $("#c-plus,#java ,#c,#c-hash,#python,#ionic,tech").hide();

    });
    $(".ionic").click(function() {
        $("#ionic").slideDown();
        $("#c-plus,#java ,#c,#c-hash,#python,#Angular,tech").hide();

    });





});