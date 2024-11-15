function countSheeps(sheep) {
    var count=0;
    for(var i of sheep){
        if(Boolean(i) == false) continue;
        if(i == true){
            count++;
        }
    }
    return count;
}
console.log(countSheeps([[],null,true,false]))