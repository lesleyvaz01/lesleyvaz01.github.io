//alert("hello");

let ourObject = {
    "name": "lesley",
    "profession": "student",
    "age": 21,
    "pets": [{"name": "Alex", "type":"dog", "dog-age": 9,  }]
    
}
console.log(ourObject)

let myData= {};

function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res =>{
        if(res.ok){
           // console.log(res.json());
           return res.json();
        
        }
        else{
            console.log(res);
        }
        
    }).then(res=> {
        myData=res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})


let name ="lesley";
//let myString ="hello" + name + "!";
let myString =`hello ${name} !`;