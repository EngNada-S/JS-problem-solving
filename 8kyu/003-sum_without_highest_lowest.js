function sumArray(arr){
    if(arr == null){
        return 0;
    }else{
        return arr.sort((a,b)=> a-b).slice(1,arr.length-1).reduce((acc,current)=> acc+ current);
    }
}
console.log(sumArray([1,1,11,2,3]))