function prime_number() {

    var number, i, flag = 0;
    number = Number(document.getElementById("num").value);
    for (i = 2; i <= number / 2; i++)
        if (number % i == 0) {
            flag = 1;
            break;
        }

    if (flag == 0) {
        document.getElementById("xyz").innerHTML = number + " is prime";
    } else {
        document.getElementById("xyz").innerHTML = number + " is Not prime";
    }
}