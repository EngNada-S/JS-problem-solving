// before
function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
        return "Hello, my love!";
}
// after
function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}