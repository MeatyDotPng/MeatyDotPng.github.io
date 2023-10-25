var colorArray = ["var(--accent1T)", "var(--accent2T)"];

const skillsetDiv = document.querySelector(".skillset");

const particles = [];

for (let i = 0; i < 10; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  applyRandomStyles(particle);
  skillsetDiv.appendChild(particle);

  // Associate movement attributes with the particle
  particles.push(createParticleMovement(particle));
}

function applyRandomStyles(element) {
  // Random position within skillsetDiv
  const maxX = skillsetDiv.clientWidth - 230; // 230 is the width of particle
  const maxY = skillsetDiv.clientHeight - 90; // 90 is the height of particle
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Random color from the colorArray
  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

  // Apply the styles to the element
  element.style.left = randomX + "px";
  element.style.top = randomY + "px";
  element.style.backgroundColor = randomColor;
  element.style.position = "absolute";
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

    // Bounce off the edges by reversing the delta
    if (rect.left <= parentRect.left || rect.right >= parentRect.right) {
      p.deltaX = -p.deltaX;
    }
    if (rect.top <= parentRect.top || rect.bottom >= parentRect.bottom) {
      p.deltaY = -p.deltaY;
    }

    // Move the particle
    p.element.style.left = p.element.offsetLeft + p.deltaX + "px";
    p.element.style.top = p.element.offsetTop + p.deltaY + "px";
  });

  requestAnimationFrame(() => animateParticles(particles));
}
