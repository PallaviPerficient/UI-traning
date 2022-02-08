function checkCondition() {
    var amount = document.getElementById("amount").value
    console.log(amount)
    if (amount) {
        if (amount >= 35) {
            alert("XYZ can purchase Both Grocery as well as Ice-cream and remaining amount is : " + (amount - 35) + "/-");
        }
        else if (amount >= 20 && amount < 35) {
            alert("XYZ can purchase only Grocery")
        }
        else {
            alert("XYZ can not Buy Anything")
        }
    }
    else {
        alert("Please Enter Some ammount")
    }
}
