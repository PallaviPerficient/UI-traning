function factorial() {
    var num, fact = 1;
    var i;
    num = document.getElementsByClassName('number')[0].value;

    num = parseInt(num);

    for (i = 1; i <= num; i++) {

        fact = fact * i;

    }

    document.getElementById('fact').innerText = "Factorial of a Number is  " + fact;

}