
/*fetch('portfolio.json')
  .then(response => {
    return response.json();
  }).then(projects => {
    console.log(projects);
    parseData(projects);
  }).catch(err => {
    console.error(`error ${err}`);
  })

function parseData(data){
  for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<div class="row project" id="${data.projects[i].subdomain}">
    <div class="mainimg"><img src = "symphony (${i +1}).png"></div>
    <div class="description"><h2>${projects.projects[i].name}</h2><p class = "subtitle">${data.projects[i].subtitle}</p>
    </div></div>`
   
  }}*/
  /*
  let proj;//setting proj equal to projects
  fetch('portfolio.json')
  .then(response => response.json())
  .then(projects => {
    console.log(projects);
    proj=projects;
    parseData(projects);
  })
  .catch(err => {
    console.error(`Error: ${err}`);
  });

function parseData(data) {
  const projectsContainer = document.getElementById("projects");
  
  data.projects.forEach((project, i) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('row', 'project');
    projectDiv.id = project.subdomain;


    projectDiv.innerHTML = `
      <div class="mainimg">
        <img src="images/symphony (${i + 1}).png" alt="${project.name}">
      </div>
      <div class="description">
        <h2>${project.name}</h2>
        <p class="subtitle">${project.subtitle}</p>
      </div>
    `;
    

    projectsContainer.appendChild(projectDiv);
  });
}
//the actual button getting clicked
for (button of document.querySelectorAll("#filters filter")){
  button.addEventListener("click", e=>{
    console.log(e.target.value);
    sortProjects(e.target.value);
  })
}

// has to do with the sorting of projects
function sortProjects(button){
  if(button = "clear"){
    for(i=0; i<proj.projects.length; i++){
      document.getElementById(proj.projects[i].subdomain).style.display = "flex";//displayed
    }
  }else if(button != undefined){
    for(i=0; i<proj.projects.length; i++){
      if(proj.projects[i].category.includes(button) == true){
        document.getElementById(proj.projects[i].subdomain).style.display = "flex";//displayed
      }else{
        document.getElementById(proj.projects[i].subdomain).style.display = "none";//none if button is invalid
      }
    }
  }else{
    console.log("error, button value undefined");//undefined
  }
}*/

fetch('portfolio.json')//this is what calls the json 
  .then(response => response.json())//json
  .then(projects => {//the the actual projects
    console.log(projects); 
    parseData(projects);
  })
  .catch(err => {
    console.error(`Error fetching JSON: ${err}`);//this is for any errors
  });

function parseData(data) {//this is basically the information
    const portfolioContainer = document.getElementById("portfolio");
    portfolioContainer.innerHTML = ''; // Clear any existing content before adding new

   
    data.projects.forEach(project => {//looping
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("tile", "all", ...project.category); 

       
        //images delxared again
        projectDiv.innerHTML = `
            <div class="carousel-container">
                <div class="carousel-slide active">
                    <img src="images/${project.mainimg}" alt="${project.name}" 
                </div>
                ${createCarousel(project.imgcarousel)} <!-- Insert carousel images -->
            </div>
            <div class="description">
                <h2>${project.name}</h2>
                <p class="subtitle">${project.subtitle}</p>
                <p>${project.description}</p>
            </div>
        `;

      
        portfolioContainer.appendChild(projectDiv);
    });
}

//images
function createCarousel(images) {
  if (!images || images.length < 1) return ''; //nothing to present

  let carouselHTML = '';
  images.forEach((img, index) => {
      carouselHTML += `
          <div class="carousel-slide ${index === 0 ? 'active' : ''}">
              <img src="img/portfolio/${img}" alt="Project Image ${index + 1}" />
          </div>
      `;
  });//moving throughout the carousel
  carouselHTML += `
    <div class="carousel-controls">
        <button class="prev" onclick="moveCarousel(event, -1)">&#10094;</button>
        <button class="next" onclick="moveCarousel(event, 1)">&#10095;</button>
    </div>
  `;
  return carouselHTML;
}

// Function to move the carousel
function moveCarousel(event, direction) {
    const container = event.target.closest('.carousel-container'); // Target the current carousel container
    const slides = container.querySelectorAll('.carousel-slide');
    let currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
  
    // Move the slide
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
  
    // Show the correct slide
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}

// Category filter functionality
document.querySelectorAll('.filter').forEach(filterBtn => {
    filterBtn.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-rel');
        filterProjects(category);
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.tile');
    projects.forEach(project => {
        // Show project if it matches the selected category or if "all" is selected
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block"; // Show project
        } else {
            project.style.display = "none"; // Hide project
        }
    });
}