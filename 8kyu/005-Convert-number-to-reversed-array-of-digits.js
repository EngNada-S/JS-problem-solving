function digitize(n) {
    return n.toString().split("").reverse().map(Number);
}
console.log(digitize(157896))