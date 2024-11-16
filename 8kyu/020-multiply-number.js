function multiply(number){
    var numOfDigits=number.toString().length;
    if(number<0){
        if(numOfDigits==2){
            numOfDigits=1
        }else{
            numOfDigits=number.toString().length-1;
        }
    }
    return number *(5**numOfDigits);
}
console.log(multiply(-3))