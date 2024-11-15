function squareOrSquareRoot(array) {
    for(var i=0; i<array.length;i++){
        if(Number.isInteger(Math.sqrt(array[i]))){
            array[i]=Math.sqrt(array[i])
        }else{
            array[i]=array[i]**2
        }
    }
    return array;  
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]))