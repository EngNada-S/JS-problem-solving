function findNeedle(haystack) {
    if(haystack.includes("needle")){
        return `found the needle at position ${haystack.indexOf("needle")}`
    }
    return "Your function didn't return anything";
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk","needle"] ))