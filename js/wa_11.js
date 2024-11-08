
//const petPhotos = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
//const altText = pic.one(pic1.jpg); pic.two(pic2.jpg);pic.three(pic3.jpg);pic.four(pic4.jpg);pic.five(pic5.jpg);

const displayedImage =document.querySelector('.displayed-img');
const  thumBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const petPhotos = ['blue.jpeg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpeg'];

const alts = {
    'blue.jpeg' : "description",
    'pic2.jpg' : "descirption",
    'pic3.jpg' : "descirption",
    'pic4.jpg' : "descirption",
    'pic5.jpg' : "Photo of cat Nur Nur"
}

for (let i=0; i<petPhotos.length; i++){
    const newImage = document.createElement('img');
newImage.setAttribute('src', '../img/'+ petPhotos[i]);
newImage.setAttribute('alt', alts[i]);
thumBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;

});
}

//btn.setAttribute("class", xxx);
//btn.textContent = xxx;
//overlay.style.backgroundColor = xxx;

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if( btnClass ==='dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgb(0 0 0 0)";
    }
});




 // objects 
 //let book={ title: " ", author: " ", yearPub: 1997};
//loops
//let ArrayName = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.heic'];
//var count = 0;
//for (let i=0; i<ArrayName.length; i++){
//if(ArrayName[i]>=5)
//count++; }
//const alex = {
//    altText: "Photo of Alex the Boston Terrier"
//}
//const ginger = {
  //  altText: "Photo of Ginger; a persian cat"
//}
//const blue = {
  //  altText: "Photo of Blue the Boston Terrier"
//}
//const moses = {
  //  altText: "Photo of Moses Hughes the boxer"
//}
//const mimi = {
  //  altText: "Photo of mimi; white crusty dog"
//}

//const alexArray = [];
//alex.push(alexArray);

//const retrievedObject= alexArray[pic1.jpg];

//const outputDiv = document.getElementsByClassName("alex-img");
//outputDiv.innerHTML=
//<p> </p>





//yourImage.addEventListener('click', e => {
    //otherImage.src = e.target.src;
    //otherImage.alt= e.target.alt;})