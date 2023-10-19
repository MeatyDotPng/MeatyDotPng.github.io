document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");

  const aboutSection = document.getElementById("about");
  const blob = document.getElementById("proficienciesBlob");
  const blobRect = blob.getBoundingClientRect();

  canvas.width = aboutSection.offsetWidth;
  canvas.height = aboutSection.offsetHeight;
  canvas.style.position = "absolute";
  canvas.style.top = aboutSection.offsetTop + "px";
  canvas.style.left = aboutSection.offsetLeft + "px";
  canvas.style.zIndex = 0; // Ensure it's behind everything else

  const particles = [];
  const numberOfParticles = 5;

  class Particle {
    constructor(icon, x, y, distance) {
      this.icon = icon; // This will be your SVG icon
      this.x = x + canvas.width / 2; // centering it relative to the canvas
      this.y = y + canvas.height / 2; // centering it relative to the canvas
      this.distance = distance;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = 0.5;
    }

    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;

      // Calculate distance to the center
      const dx = this.x - canvas.width / 2;
      const dy = this.y - canvas.height / 2;
      const distanceToCenter = Math.sqrt(dx * dx + dy * dy);

      // If it exceeds the max distance or falls below a min distance, reverse the speed (make it move the other way)
      if (
        distanceToCenter > this.distance ||
        distanceToCenter < this.distance * 0.5
      ) {
        this.speed = -this.speed;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2); // Blob center
      ctx.lineTo(this.x, this.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < numberOfParticles; i++) {
    const distance = 50 + Math.random() * 150; // Random distance from blob
    const angle = Math.random() * Math.PI * 2;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    particles.push(new Particle(null, x, y, distance));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
      particle.update();
      particle.draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
});
