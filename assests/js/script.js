// header start here==========================================

const mobile_nav = document.querySelector(".mobileNavBtn");
const header_nav = document.querySelector("header");

const toggleNavbar = () => {
  header_nav.classList.toggle("active");
};

header_nav.addEventListener("click", () => toggleNavbar());

// header end here==========================================

// education section start here=================================
document.addEventListener('DOMContentLoaded', function () {
  const educationData = [
    {
      type: 'School - SSC',
      institution: 'Vinay High School',
      location: 'Chembur Mumbai',
      year: '2015 - 2016'
    },
    {
      type: 'College - HSC',
      institution: 'S.K Rai College',
      location: 'Chembur Mumbai',
      year: '2017 - 2018'
    },
    {
      type: 'Degree - BSC CS',
      institution: 'Dr. Babasaheb Ambedkar College',
      location: 'Chembur Mumbai',
      year: '2018 - 2021'
    },
    {
      type: 'Course - Web Design',
      institution: 'Maharashtra Technical Academy',
      location: 'Kurla Mumbai',
      year: '2020'
    }
  ];

  // Function to create and append education details to the DOM
  function displayEducationDetails() {
    const educationContainer = document.querySelector('.educationDetails');

    educationData.forEach(education => {
      const educationItem = document.createElement('div');
      educationItem.className = education.type.toLowerCase().split(' ')[0];
      educationItem.innerHTML = `
                <h5>${education.type}</h5>
                <span class="institution">${education.institution}</span>
                <span class="location">${education.location}</span>
                <span class="year">${education.year}</span>
            `;

      educationContainer.appendChild(educationItem);
    });
  }

  displayEducationDetails();
});
// education section end here=================================

// project section start here==============================

let projects = {
  data: [
    {
      image: "./assests/images/infocastProject.jpg",
      projectName: "Infocast System Private Limited",
      category: "Company",
    },
    {
      image: "./assests/images/ImprintProject.jpg",
      projectName: "Imprint Magazine",
      category: "Company",
    },
    {
      image: "./assests/images/envoyProject.jpg",
      projectName: "Envoy Marketing Private Limited",
      category: "Company",
    },
    {
      image: "./assests/images/swarashreeProject.jpg",
      projectName: "Swarashree Enterprises Private Limited",
      category: "Company",
    },
    {
      image: "./assests/images/innovasProject.jpg",
      projectName: "Innovas Techno Build",
      category: "Client",
    },
    {
      image: "./assests/images/crystaProject.jpg",
      projectName: "Crysta Pharmatech LLP",
      category: "Client",
    },
    {
      image: "./assests/images/cohereProject.jpg",
      projectName: "Cohere",
      category: "Personal",
    },
  ],
};

for (let i of projects.data) {

  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");

  let imgProject = document.createElement("div");
  imgProject.classList.add("projectImage");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgProject.appendChild(image);
  card.appendChild(imgProject);

  let projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");

  let link = document.createElement("a");//

  link.href = getLinkForProject(i.projectName);//

  let name = document.createElement("h5");
  name.classList.add("project-name");


  link.innerText = i.projectName.toUpperCase();

  name.appendChild(link);

  projectContainer.appendChild(name);

  card.appendChild(projectContainer);
  document.querySelector(".projectAll").appendChild(card);
}

//for link

function getLinkForProject(projectName) {
  const projectLinks = {
    "Infocast System Private Limited": "https://infocast.in/",
    "Imprint Magazine": "https://imprint-magazine.in/",
    "Envoy Marketing Private Limited": "https://envoymarketing.in/",
    "Swarashree Enterprises Private Limited": "http://www.swarashreemusic.in/",
    "Innovas Techno Build": "http://innovas.in/",
    "Crysta Pharmatech LLP": "https://crystapharmatech.in/",
    "Cohere": "https://deepalijaiswar9.github.io/cohere/"
  };

  // Return the link for the given project name
  return projectLinks[projectName] || "#"; // Default to "#" if no link is found
}

function filterProject(value) {
  // button class
  let buttons = document.querySelectorAll(".buttonValue");
  buttons.forEach((button) => {
    // check ifvalue equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // select all cards
  let elements = document.querySelectorAll(".card");
  // loop through all cards
  elements.forEach((element) => {
    // display all cards on 'All' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // check if elements contais category class
      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}

window.onload = () => {
  filterProject("all");
};
// project section end here================================











