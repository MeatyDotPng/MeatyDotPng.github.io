// particles.js

const numOfPlanets = 10;
const particleSize = 100;
var colorArray = ["var(--accent1)", "var(--accent2)"];
// var colorArray = [
//   "aliceblue",
//   "aqua",
//   "aquamarine",
//   "azure",
//   "blueviolet",
//   "blue",
//   "cadetblue",
//   "chartreuse",
//   "coral",
//   "cornflowerblue",
//   "cyan",
//   "crimson",
//   "darkblue",
//   "darkcyan",
//   "darkgoldenrod",
//   "darkmagenta",
//   "darkseagreen",
//   "darkorange",
//   "darkslateblue",
//   "darkorchid",
//   "darkslategray",
//   "darkturquoise",
//   "deeppink",
//   "darkviolet",
//   "dodgerblue",
//   "floralwhite",
//   "fuchsia",
//   "gold",
//   "greenyellow",
//   "honeydew",
//   "hotpink",
//   "indigo",
//   "lawngreen",
//   "lightblue",
//   "lightcyan",
//   "lightgreen",
//   "lightskyblue",
//   "lightsalmon",
//   "lightseagreen",
//   "mediumslateblue",
//   "mediumpurple",
//   "midnightblue",
//   "paleturquoise",
//   "palegreen",
// ];

const skillsetBlob = document.getElementById("skillsetBlob");

for (let i = 0; i < numOfPlanets; i++) {
  const particle = document.createElement("span");
  skillsetBlob.parentNode.insertBefore(particle, skillsetBlob);

  const randDistanceFromSVG = Math.random() * 20 + 50;
  const angle = Math.random() * 2 * Math.PI;
  const xPos =
    skillsetBlob.getBoundingClientRect().width / 2 +
    randDistanceFromSVG * Math.cos(angle);
  const yPos =
    skillsetBlob.getBoundingClientRect().height / 2 +
    randDistanceFromSVG * Math.sin(angle);

  particle.style.position = "absolute";
  particle.style.left = "50%";
  particle.style.top = "50%";
  particle.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
  particle.style.zIndex = "10";

  particle.style.width = `${particleSize}px`;
  particle.style.height = `${particleSize}px`;

  const randomColorIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomColorIndex];

  // Create the child particle
  const childParticle = document.createElement("div");
  childParticle.classList.add("child-particle");
  childParticle.style.position = "absolute";
  childParticle.style.left = `${xPos}px`;
  childParticle.style.top = `${yPos}px`;
  childParticle.style.backgroundColor = randomColor;

  const randInterval = Math.random() * 30 + 10; // Adjust for desired rotation time
  childParticle.style.animation = `spinOp ${randInterval}s linear infinite`;

  // Create image and text inside child particle
  const imgElement = document.createElement("img");
  imgElement.src = "images/profile.jpg";
  imgElement.style.height = "100%";
  childParticle.appendChild(imgElement);

  const textElement = document.createElement("p");
  textElement.innerText = "NA";
  textElement.style.textAlign = "center";
  textElement.style.fontSize = "20px";
  textElement.style.color = "var(--main)";
  textElement.style.fontWeight = "bold";
  childParticle.appendChild(textElement);

  particle.appendChild(childParticle);

  particle.style.animation = `spin ${randInterval}s linear infinite`;
}
