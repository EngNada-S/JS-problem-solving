function doubleChar(str) {
    return str.split("").reduce((acc,current)=> acc+current.repeat(2),"");
}
console.log(doubleChar("hello world"))