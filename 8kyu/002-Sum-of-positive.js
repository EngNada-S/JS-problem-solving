function positiveSum(arr){
    var sum=0;
    for(var i of arr){
        if(i > 0){
            sum += i
        }
    }
    return sum;
}
console.log(positiveSum([1, -4, 7, 12]));