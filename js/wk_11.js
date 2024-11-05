//alert('hello')
//console.log(document.querySelector('button'));
//console.log(document.querySelectorAll('button'));
//console.log(document.querySelectorAll('button')[1]);
//console.log(document.queryElementByClassName('my_button'));
//console.log(document.queryElementByClassName('my_button')[2]);
//console.log(document.querySelectorAll("my_id .my_class"));

hello("Casey");

function hello(name){
    alert("hello "+ name);
}

functioneven(n) {
    if(n%2 ==0){
        return true;
    }else{
        return false;
    }
}
console.log(even(20));
console.log(even(1));
console.log(even(13));

let arr=["one","two","three"];

function buildText(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        paragraph += arr[i] + " ";
    }
    document.getElementById("button_1").addEventListener("click", function(e){buildText(text)});
}

//buildText(text);

