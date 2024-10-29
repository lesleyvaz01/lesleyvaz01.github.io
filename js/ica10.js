let my_var  = 100;
var my_other_var ="HEY :3";
const this_is_a_constant = "constant";
console.log(my_other_var);
my_other_var += "!";
//alert("this is an alert");


// how to ineract with the DOM
console.log(document.getElementById("ica_head"));
document.getElementById("ica_head").addEventListener("click", function(e){
    alert("BOO");
    document.getElementById("ica_paragraph").innerHTML = "GHOST CALICO BOO";
    document.getElementById("ica_paragraph").style.color = "orange";
    document.getElementById("ica_image").src = "../img/calico_ghost.jpeg";

})

console.log(document.getElementById("ica_head").innerHTML);


