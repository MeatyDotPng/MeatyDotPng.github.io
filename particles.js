var colorArray = ["rgba(41, 161, 157, 0.53)", "rgba(163, 247, 191, 0.53)"];

var skills = [
  {
    icon: '<i class="lni lni-html5"></i>',
    title: "HTML",
    description: "Expert",
  },
  {
    icon: '<i class="lni lni-css3"></i>',
    title: "CSS",
    description: "Expert",
  },
  {
    icon: '<i class="lni lni-javascript"></i>',
    title: "JavaScript",
    description: "Expert",
  },
  {
    icon: '<i class="lni lni-react"></i>',
    title: "React",
    description: "Novice",
  },
  {
    icon: '<i class="lni lni-bootstrap-5"></i>',
    title: "Bootstrap",
    description: "Intermediate",
  },
  {
    icon: '<i class="lni lni-mysql"></i>',
    title: "MySQL",
    description: "Intermediate",
  },
  {
    icon: '<i class="lni lni-mongodb"></i>',
    title: "MongoDB",
    description: "Intermediate",
  },
  {
    icon: '<i class="lni lni-nodejs"></i>',
    title: "NodeJS",
    description: "Novice",
  },
  {
    icon: '<i class="lni lni-vuejs"></i>',
    title: "Vue",
    description: "Intermediate",
  },
  {
    icon: '<i class="lni lni-angular"></i>',
    title: "Angular",
    description: "Novice",
  },
  {
    icon: '<i class="lni lni-java"></i>',
    title: "Java",
    description: "Intermediate",
  },
  {
    icon: '<i class="lni lni-typescript"></i>',
    title: "TypeScript",
    description: "Intermediate",
  },
  {
    icon: '<i class="lni lni-python"></i>',
    title: "Python",
    description: "Novice",
  },
  {
    icon: '<i class="lni lni-php"></i>',
    title: "PHP",
    description: "Intermediate",
  },
  {
    icon: '<i class="lni lni-git"></i>',
    title: "Git",
    description: "Novice",
  },
  {
    icon: '<i class="lni lni-github-original"></i>',
    title: "GitHub",
    description: "Novice",
  },
];

let occupiedPositions = [];

function isPositionOccupied(x, y) {
  for (let pos of occupiedPositions) {
    if (Math.abs(pos.x - x) < 230 && Math.abs(pos.y - y) < 90) {
      return true;
    }
  }
  return false;
}

function applyRandomStyles(element) {
  // Random position within skillsetDiv
  const maxX = skillsetDiv.clientWidth - 230; // 230 is the width of particle
  const maxY = skillsetDiv.clientHeight - 90; // 90 is the height of particle

  let randomX,
    randomY,
    attempts = 0;

  do {
    randomX = Math.floor(Math.random() * maxX);
    randomY = Math.floor(Math.random() * maxY);
    attempts++;
  } while (isPositionOccupied(randomX, randomY) && attempts < 1000);

  // Save occupied position
  occupiedPositions.push({ x: randomX, y: randomY });

  // Apply the styles to the element
  element.style.left = randomX + "px";
  element.style.top = randomY + "px";
  element.style.position = "absolute";
}

const skillsetDiv = document.querySelector(".skillset");

const particles = [];
const noParticles = skills.length;

for (let i = 0; i < noParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  const index = Math.floor(Math.random() * 2);
  particle.setAttribute("data-color", index.toString());
  particle.style.backgroundColor = colorArray[index];

  // Adding the icon
  particle.innerHTML = skills[i].icon;

  // Creating div for title and description
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");

  const titleP = document.createElement("p");
  titleP.innerText = skills[i].title;
  infoDiv.appendChild(titleP);

  const descriptionP = document.createElement("p");
  descriptionP.innerText = skills[i].description;
  infoDiv.appendChild(descriptionP);

  particle.appendChild(infoDiv);

  applyRandomStyles(particle);
  skillsetDiv.appendChild(particle);

  // Associate movement attributes with the particle
  particles.push(createParticleMovement(particle));
}

// Animate particles
animateParticles(particles);

function createParticleMovement(particle) {
  return {
    element: particle,
    deltaX: Math.random() > 0.5 ? 1 : -1, // 1 means move right, -1 means move left
    deltaY: Math.random() > 0.5 ? 1 : -1, // 1 means move down, -1 means move up
  };
}

function animateParticles(particles) {
  particles.forEach((p) => {
    let rect = p.element.getBoundingClientRect();
    let parentRect = skillsetDiv.getBoundingClientRect();
    let directionChanged = false; // flag to check if direction changed

    // Bounce off the edges by reversing the delta
    if (rect.left <= parentRect.left || rect.right >= parentRect.right) {
      p.deltaX = -p.deltaX;
      directionChanged = true;
    }
    if (rect.top <= parentRect.top || rect.bottom >= parentRect.bottom) {
      p.deltaY = -p.deltaY;
      directionChanged = true;
    }

    // If direction changed, toggle the color
    if (directionChanged) {
      let currentColorIndex = parseInt(p.element.getAttribute("data-color"));
      let newColorIndex = 1 - currentColorIndex; // Toggles between 0 and 1
      p.element.style.backgroundColor = colorArray[newColorIndex];
      p.element.setAttribute("data-color", newColorIndex.toString());
    }

    // Move the particle
    p.element.style.left = p.element.offsetLeft + p.deltaX + "px";
    p.element.style.top = p.element.offsetTop + p.deltaY + "px";
  });

  setTimeout(
    () => requestAnimationFrame(() => animateParticles(particles)),
    30
  );
}
