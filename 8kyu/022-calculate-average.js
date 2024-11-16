function findAverage(array) {
    return (array.length==0)? 0:(array.reduce((acc,current)=> acc+current,0))/array.length;
}
console.log(findAverage([1,2,3,4]))