const petPhotos = ['blue1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];


const alts = {
    'blue1.jpeg': "Photo of Blue the Boston Terrier",
    'pic2.jpeg': "Photo of Alex the Boston Terrier",
    'pic3.jpeg': "Another Photo of Alex the Boston Terrier sleeping",
    'pic4.jpeg': "Ginger the Persian cat looking at comics",
    'pic5.jpeg': "Photo of cat Nur Nur frightened"
};


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


petPhotos.forEach(photo => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', '../img/' + photo);
    newImage.setAttribute('alt', alts[photo]);
    thumbBar.appendChild(newImage);

   
    newImage.addEventListener('click', function () {
        displayedImage.src = newImage.src;  
        displayedImage.alt = newImage.alt;  
    });
});


btn.addEventListener('click', function () {
    if (btn.classList.contains('dark')) {
        
        btn.classList.remove('dark');
        btn.classList.add('light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";  
    } else {
        
        btn.classList.remove('light');
        btn.classList.add('dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
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