function checkCondition(){
    var amount = document.getElementById("amount").value
    console.log(amount)
    if(amount)
    {
        if(amount >= 35 ){
            alert("Mr.Ram can purchase Both Grocery as well as Ice-cream and remaining amount is : " + (amount - 35) + "/-");
        }
        else if(amount >=20 && amount < 35)
        {
            alert("Mr.Ram can purchase only Grocery")
        }
        else{
            alert("Mr.Ram can not Buy Anything")
        }
    }
    else{
        alert("Please Enter Some ammount")
    }
}
