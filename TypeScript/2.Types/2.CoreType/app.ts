function addition(n1: number ,n2 :number ,printshowcase: string){
    const value = n1 +n2;
    return( value + printshowcase );
}

const number1 = 10;
const number2 = 20;
const showvalue ="Result alla"
const result = addition(number1 , number2 ,showvalue);
console.log("Result is" , result);

