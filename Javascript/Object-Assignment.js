function record(e) {
    var obj = [{
            name: "Name",
            details: {
                Salary: "Salary",
                desg: "Desgination",
                Area: "Area",
                hobbies: "Hobbies",
            }
        },
        {
            name: "Pallavi",
            details: {
                Salary: 400,
                desg: "STC",
                Area: "Saoner",
                hobbies: "cooking",
            }
        },
        {
            name: "Jaishree",
            details: {
                Salary: 4000,
                desg: "STC",
                Area: "Nagpur",
                hobbies: "cooking",
            }
        },
        {
            name: "Sahil",
            details: {
                Salary: 400,
                desg: "STC",
                Area: "Nagpur",
                hobbies: "cooking",
            }
        },
        {
            name: "Shoa",
            details: {
                Salary: 400,
                desg: "STC",
                Area: "Nagpur",
                hobbies: "cooking",
            }
        },
    ]
    var result = '';
    for (var i = 0; i < obj.length; i++) {
        if (e.keyCode === 13) {
            var name = "<div class='col-md-2'>" + obj[i].name + "</div>";
            var Salary = "<div class='col-md-2'>" + obj[i].details.Salary + "</div>";
            var desg = "<div class='col-md-2'>" + obj[i].details.desg + "</div>";
            var Area = "<div class='col-md-2'>" + obj[i].details.Area + "</div>";
            var hobbies = "<div class='col-md-2'>" + obj[i].details.hobbies + "</div>";
            result += "<div class='row'>" + name + Salary + desg + Area + hobbies + "</div>";
            document.getElementById("abc").innerHTML = result;
        }
    }
}