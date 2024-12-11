
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
    <div class="mainimg"><img src = "symphony (${i +1}).png"</div>
    <div class="description"><h2>${projects.projects[i].name}</h2><p class = "subtitle">${data.projects[i].subtitle}</p>
    </div></div>`
   
  }}*/
  let proj;
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

for (button of document.querySelectorAll("#filters filter")){
  button.addEventListener("click", e=>{
    console.log(e.target.value);
    sortProjects(e.target.value);
  })
}

function sortProjects(button){
  if(button = "clear"){
    for(i=0; i<proj.projects.length; i++){
      document.getElementById(proj.projects[i].subdomain).style.display = "flex";
    }
  }else if(button != undefined){
    for(i=0; i<proj.projects.length; i++){
      if(proj.projects[i].category.includes(button) == true){
        document.getElementById(proj.projects[i].subdomain).style.display = "flex";
      }else{
        document.getElementById(proj.projects[i].subdomain).style.display = "none";
      }
    }
  }else{
    console.log("error, button value undefined");
  }
}
