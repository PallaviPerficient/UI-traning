var form1 = document.querySelector("#form");
var result = document.querySelector(".result");
var resultFname = document.querySelector("#result-fname");
var resultLname = document.querySelector("#result-lname");
var resultEmail = document.querySelector("#result-email");

form1.addEventListener("submit",function(e){
    e.preventDefault();
    var resultAge = document.querySelector("#age-res");
    
    var fname = e.target.fname.value;
    var lname = e.target.lname.value;
    var email = e.target.email.value;
    var age = e.target.age.value;
    age = parseInt(age);

    result.style.display = "block";

    resultFname.innerHTML = fname[0].toUpperCase() + fname.slice(1);
    resultLname.innerHTML = lname[0].toUpperCase() + lname.slice(1);
    resultEmail.innerHTML = email;

    if(age > 10){
        resultAge.innerHTML = "You are a person";
    }else{
        resultAge.innerHTML = "You are a Kid";
    }
});