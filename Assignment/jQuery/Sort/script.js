$(document).ready(function() {
    displaydata();
});
function displaydata() {
    var data = [{
            "brand": "Audi_1",
            "DEALERNAME": "Pallavi kanfade",
            "STREETADDRESS": "Saoner",
            "CITY": "Nagpur",
            "STATE": "Maharashtra",
            "ZIPCODE": "00001"
        },
        {
            "brand": "Audi_2",
            "DEALERNAME": "Jaishree Moundekar",
            "STREETADDRESS": "Shanti Nagar",
            "CITY": "Ngapur",
            "STATE": "Maharashtra",
            "ZIPCODE": "00002"
        },
        {
            "brand": "3",
            "DEALERNAME": "Sahil Dhoble",
            "STREETADDRESS": "Dighori",
            "CITY": "Nagpur",
            "STATE": "Maharashtra",
            "ZIPCODE": "00003"
        },
        {
            "brand": "4",
            "DEALERNAME": "Shoa Zehra",
            "STREETADDRESS": "Kamptee",
            "CITY": "Nagpur",
            "STATE": "Maharashta",
            "ZIPCODE": "23947"
        },
        {
            "brand": "Ford_7",
            "DEALERNAME": "Battlefield Ford ",
            "STREETADDRESS": "8820  Centreville Rd.",
            "CITY": "Manassas",
            "STATE": "VA",
            "ZIPCODE": "20110-5258"
        }, 
        {
            "brand": "Ford_3",
            "DEALERNAME": "Thomassen Ford Inc. ",
            "STREETADDRESS": "100  South West St",
            "CITY": "Charles Town ",
            "STATE": "WV",
            "ZIPCODE": "25414-1658"
        },
        {
            "brand": "Ford_6",
            "DEALERNAME": "Crouse Ford Sales Inc. ",
            "STREETADDRESS": "11 Antrim Boulevard",
            "CITY": "Taneytown",
            "STATE": "MD",
            "ZIPCODE": "21787-2209"
        },
        {
            "brand": "Ford_4",
            "DEALERNAME": "Jeff Belzer's New Prague Ford",
            "STREETADDRESS": "1181 280th Street West",
            "CITY": "New Prague",
            "STATE": "MN",
            "ZIPCODE": "56071-4707"
        },
        {
            "brand": "Ford_5",
            "DEALERNAME": "Hinder Ford. Inc",
            "STREETADDRESS": "505 S Philadelphia Bivd",
            "CITY": "Aberdeen",
            "STATE": "MD",
            "ZIPCODE": "21001-3461"
        },
        {
            "brand": "Ford_0",
            "DEALERNAME": "Jerry's Leesburg Ford",
            "STREETADDRESS": "847 East Market",
            "CITY": "Leesburg",
            "STATE": "VA",
            "ZIPCODE": "20176-4404"
        }
    ];
    for (var i = 0; i < data.length; i++) {
        var row1 = $('<tr><td>' + data[i].brand + '</td><td>' + data[i].DEALERNAME + '</td><td>' + data[i].STREETADDRESS + '</td><td>' + data[i].CITY + '</td><td>' + data[i].STATE + '</td><td>' + data[i].ZIPCODE + '</td></tr>');
        $('#mytable tbody').append(row1);
    }

    $(".up1").click(function() {
        function SortBybrand(x, y) {
            return ((x.brand == y.brand) ? 0 : ((x.brand < y.brand) ? 1 : -1));
        }
        data.sort(SortBybrand);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up1").hide();
        $(".down1, .down2, .down3, .down4, .down5, .down6, .up2, .up3, .up4, .up5, .up6").show();
    })
    $(".down1").click(function() {
        function SortBybrand(x, y) {
            return ((x.brand == y.brand) ? 0 : ((x.brand > y.brand) ? 1 : -1));
        }
        data.sort(SortBybrand);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up1, .down2, .down3, .down4, .down5, .down6, .up2, .up3, .up4, .up5, .up6").show();
        $(".down1").hide();
    })

    $(".up2").click(function() {
        function SortByDEALERNAME(x, y) {
            return ((x.DEALERNAME == y.DEALERNAME) ? 0 : ((x.DEALERNAME < y.DEALERNAME) ? 1 : -1));
        }
        data.sort(SortByDEALERNAME);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up2").hide();
        $(".down2, .down1, .down3, .down4, .down5, .down6, .up1, .up3, .up4, .up5, .up6").show();
    })
    $(".down2").click(function() {
        function SortByDEALERNAME(x, y) {
            return ((x.DEALERNAME == y.DEALERNAME) ? 0 : ((x.DEALERNAME > y.DEALERNAME) ? 1 : -1));
        }
        data.sort(SortByDEALERNAME);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up2, .down1, .down3, .down4, .down5, .down6, .up1, .up3, .up4, .up5, .up6").show();
        $(".down2").hide();
    })
   
    $(".up3").click(function() {
        function SortBySTREETADDRESS(x, y) {
            return ((x.STREETADDRESS == y.STREETADDRESS) ? 0 : ((x.STREETADDRESS < y.STREETADDRESS) ? 1 : -1));
        }
        data.sort(SortBySTREETADDRESS);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up3").hide();
        $(".down3, .down1, .down2, .down4, .down5, .down6, .up2, .up1, .up4, .up5, .up6").show();
    })
    $(".down3").click(function() {
        function SortBySTREETADDRESS(x, y) {
            return ((x.STREETADDRESS == y.STREETADDRESS) ? 0 : ((x.STREETADDRESS > y.STREETADDRESS) ? 1 : -1));
        }
        data.sort(SortBySTREETADDRESS);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up3, .down1, .down2, .down4, .down5, .down6, .up2, .up1, .up4, .up5, .up6").show();
        $(".down3").hide();
    })

    $(".up4").click(function() {
        function SortByCITY(x, y) {
            return ((x.CITY == y.CITY) ? 0 : ((x.CITY > y.CITY) ? 1 : -1));
        }
        data.sort(SortByCITY);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up4").hide();
        $(".down4, .down1, .down2, .down3, .down5, .down6, .up2, .up3, .up1, .up5, .up6").show();
    })
    $(".down4").click(function() {
        function SortByCITY(x, y) {
            return ((x.CITY == y.CITY) ? 0 : ((x.CITY < y.CITY) ? 1 : -1));
        }
        data.sort(SortByCITY);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up4, .down1, .down2, .down3, .down5, .down6, .up2, .up3, .up1, .up5, .up6").show();
        $(".down4").hide();
    })

    $(".up5").click(function() {
        function SortBySTATE(x, y) {
            return ((x.STATE == y.STATE) ? 0 : ((x.STATE > y.STATE) ? 1 : -1));
        }
        data.sort(SortBySTATE);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up5").hide();
        $(".down5, .down1, .down2, .down3, .down4, .down6, .up2, .up3, .up4, .up1, .up6").show();
    })
    $(".down5").click(function() {
        function SortBySTATE(x, y) {
            return ((x.STATE == y.STATE) ? 0 : ((x.STATE < y.STATE) ? 1 : -1));
        }
        data.sort(SortBySTATE);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up5, .down1, .down2, .down3, .down4, .down6, .up2, .up3, .up4, .up1, .up6").show();
        $(".down5").hide();
    })

    $(".up6").click(function() {
        function SortByZIPCODE(x, y) {
            return ((x.ZIPCODE == y.ZIPCODE) ? 0 : ((x.ZIPCODE > y.ZIPCODE) ? 1 : -1));
        }
        data.sort(SortByZIPCODE);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up6").hide();
        $(".down6, .down1, .down2, .down3, .down4, .down5, .up2, .up3, .up4, .up5, .up1").show();
    })
    $(".down6").click(function() {
        function SortByZIPCODE(x, y) {
            return ((x.ZIPCODE == y.ZIPCODE) ? 0 : ((x.ZIPCODE < y.ZIPCODE) ? 1 : -1));
        }
        data.sort(SortByZIPCODE);
        $('#mytable tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].DEALERNAME + '</td><td>' + data[n].STREETADDRESS + '</td><td>' + data[n].CITY + '</td><td>' + data[n].STATE + '</td><td>' + data[n].ZIPCODE + '</td></tr>');
            $('#mytable tbody').append(row);
        }
        $(".up6, .down1, .down2, .down3, .down4, .down5, .up2, .up3, .up4, .up5, .up1").show();
        $(".down6").hide();
    })
} 
