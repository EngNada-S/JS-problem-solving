function basicOp(operation, value1, value2){
    switch(operation){
        case "+":
            return value1+value2;
            break;
        case "-":
            return value1-value2;
            break;
        case "*":
            return value1*value2;
            break;
        case "/":
            return value1/value2;
        default:
            return 0;
    }
}
console.log(basicOp("+", 4, 7))