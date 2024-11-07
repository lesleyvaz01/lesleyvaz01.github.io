var fortunes = [
    "You will be a Teacher in Paris, and married to Alice with 2 kids.",
    "You will be an Engineer in New York, and married to Bob with 3 kids.",
    "You will be an Artist in Tokyo, and married to Charlie with 1 kid."
];


var clickCount = 0;


function tellFortune() {
    
    document.getElementById("fortune").innerText = fortunes[clickCount % fortunes.length];
    
    
    clickCount++;
}