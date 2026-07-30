const projects = [
  {
    number: "One",
    name: "Explore The World",
    video: "explore-the-world-record",
    description:
      "A responsive travel website built with HTML, CSS. Features include destinations gallery, list of places to visit.",
    web: true,
    vercel: "https://explore-the-world-zeta.vercel.app/",
    github: "https://github.com/Arush07-afk/Explore-The-World-202501100400086",
  },
  {
    number: "Two",
    name: "Amazon Clone",
    video: "amazon-clone",
    description: "An Amazon clone website made with simple HTML and CSS.",
    web: true,
    vercel: "https://amazon-clone-kohl-ten-92.vercel.app/amazon.html",
    github: "https://github.com/Arush07-afk/amazon-clone",
  },
  {
    number: "Three",
    name: "First Aid Mate",
    video: "first-aid-mate-record",
    description:
      'A first aid guide website,  "First Aid Mate" made by basic html, css and js for providing crucial life saving first aid information.',
    web: true,
    vercel: "https://first-aid-mate.vercel.app/",
    github: "https://github.com/Arush07-afk/dt-ca2",
  },
  {
    number: "Four",
    name: "Sportico",
    video: "sportico-record",
    description:
      "Sportico, an AI enabled fitness app made using Figma (UI/UX) and Stitch Beta. Sportico has seamless animations and connnectivity between 25+ different screens.",
    web: false,
    figma: "https://lnkd.in/gnSFSu88",
  },
];

export function renderProjects() {
  const projectsContainer = document.querySelector(".projectani");
  projects.forEach((project) => {
    if (project.web) {
      projectsContainer.innerHTML += `
                <div class="project">
                    <h3>Project ${project.number}</h3>
                    <iframe src="./assets/projects/${project.video}.mp4" frameborder="0"></iframe>
                    <p>${project.description}<br> <br>
                    Deployed Link:- <a href="${project.vercel}" target = "_blank" class="gr">${project.name}</a> <br> <br>
                    GitHub Repository:-<a href="${project.github}" target = "_blank" class="gr">${project.name}</a> </p>
                </div>
            `;
    } else {
      projectsContainer.innerHTML += `
                <div class="project">
                    <h3>Project ${project.number}</h3>
                    <iframe src="./assets/projects/${project.video}.mp4" frameborder="0"></iframe>
                    <p>${project.description}<br> <br>
                    Figma Link:- <a href="${project.figma}" target = "_blank" class="gr">${project.name}</a></p>
                </div>
            `;
    }
  });
}
