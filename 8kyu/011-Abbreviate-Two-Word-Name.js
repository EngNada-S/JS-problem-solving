function abbrevName(name){
    var firstName=name.split(" ")[0][0].toUpperCase()
    var lastName=name.split(" ")[1][0].toUpperCase()
    return `${firstName}.${lastName}`
}
console.log(abbrevName("patrick feeney"))