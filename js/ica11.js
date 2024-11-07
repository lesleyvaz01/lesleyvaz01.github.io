const fortune1 = tellFortune(2, "Alice", "Paris", "Teacher");
const fortune2 = tellFortune(3, "Bob", "New York", "Engineer");
const fortune3 = tellFortune(1, "Charlie", "Tokyo", "Artist");



function tellFortune(children, partner, location, job) {
    return `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
}


document.getElementById("fortune1").innerText = fortune1;
document.getElementById("fortune2").innerText = fortune2;
document.getElementById("fortune3").innerText = fortune3;

