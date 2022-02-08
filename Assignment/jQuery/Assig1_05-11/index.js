$(document).ready(function() {
    $(".section").hide();
    $("#c1").click(function() {
        $("#panel").slideDown();
        $("#panel1,#panel2").hide();

    });

    $("#c2").click(function() {
        $("#panel1").slideDown();
        $("#panel,#panel2").hide();
    });

    $("#c3").click(function() {
        $("#panel2").slideDown();
        $("#panel1,#panel").hide();

    });



});