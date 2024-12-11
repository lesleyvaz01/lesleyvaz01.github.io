/*

fetch('portfolio.json')
  .then(response => response.json())
  .then(projects => {
      console.log(projects); // Log the data to make sure it's loaded correctly
      parseData(projects);
  })
  .catch(err => {
      console.error(`Error fetching JSON: ${err}`);
  });

function parseData(data) {
    const portfolioContainer = document.getElementById("portfolio");
    portfolioContainer.innerHTML = ''; // Clear any existing content before adding new

    // Loop through each project and create a dynamic tile
    data.projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("tile", "all", ...project.category); // Add classes dynamically

        // Insert HTML structure dynamically (image comes first)
        projectDiv.innerHTML = `
            <div class="projimg">
                <img src="img/portfolio/${project.sub_domain}.png" alt="${project.name}">
            </div>
            <div class="description">
                <h2>${project.name}</h2>
                <p class="subtitle">${project.subtitle}</p>
                <p>${project.description}</p>
            </div>
            <div class="carousel">
                ${createCarousel(project.imgcarousel)}
            </div>
        `;

        portfolioContainer.appendChild(projectDiv);
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

// Function to create carousel HTML
function createCarousel(images) {
  if (!images || images.length < 1) return ''; // No images to show

  let carouselHTML = '<div class="carousel-container">';
  images.forEach((img, index) => {
      carouselHTML += `
          <div class="carousel-slide ${index === 0 ? 'active' : ''}">
              <img src="${img}" alt="Project Image ${index + 1}" />
          </div>
      `;
  });
  carouselHTML += '</div><div class="carousel-controls">';
  carouselHTML += `<button class="prev" onclick="moveCarousel(-1)">&#10094;</button>`;
  carouselHTML += `<button class="next" onclick="moveCarousel(1)">&#10095;</button>`;
  carouselHTML += '</div>';

  return carouselHTML;
}

// Function to move the carousel
let currentSlide = 0;
function moveCarousel(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentSlide) {
          slide.classList.add('active');
      }
  });
}*/
fetch('portfolio.json')
  .then(response => response.json())
  .then(projects => {
    console.log(projects); // Log the data to make sure it's loaded correctly
    parseData(projects);
  })
  .catch(err => {
    console.error(`Error fetching JSON: ${err}`);
  });

function parseData(data) {
    const portfolioContainer = document.getElementById("portfolio");
    portfolioContainer.innerHTML = ''; // Clear any existing content before adding new

    // Loop through each project and create a dynamic tile
    data.projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("tile", "all", ...project.category); // Add classes dynamically

        // Insert HTML structure dynamically
        projectDiv.innerHTML = `
            <div class="carousel-container">
                <div class="carousel-slide active">
                    <img src="img/portfolio/${project.mainimg}" alt="${project.name}" />
                </div>
                ${createCarousel(project.imgcarousel)} <!-- Insert carousel images -->
            </div>
            <div class="description">
                <h2>${project.name}</h2>
                <p class="subtitle">${project.subtitle}</p>
                <p>${project.description}</p>
            </div>
        `;

        // Append the new project to the portfolio container
        portfolioContainer.appendChild(projectDiv);
    });
}

// Function to create carousel HTML
function createCarousel(images) {
  if (!images || images.length < 1) return ''; // No images to show

  let carouselHTML = '';
  images.forEach((img, index) => {
      carouselHTML += `
          <div class="carousel-slide ${index === 0 ? 'active' : ''}">
              <img src="img/portfolio/${img}" alt="Project Image ${index + 1}" />
          </div>
      `;
  });
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