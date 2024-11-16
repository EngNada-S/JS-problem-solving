//return price without vat
function excludingVatPrice(price){
    return (!price)?-1:price/1.15;
}
console.log(excludingVatPrice(230))