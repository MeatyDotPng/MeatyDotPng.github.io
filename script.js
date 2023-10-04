//! ======================= loader =======================
window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.display = "none";
  }, 1000); // This is for a smooth transition. Adjust as needed.
});

//! ======================= glitch scroll =======================
const glitches = document.querySelectorAll(".glitch");
const together = document.querySelector("#slogan strong");

window.addEventListener("scroll", function () {
  glitches.forEach((glitchElem) => {
    const elemTop = glitchElem.getBoundingClientRect().top; // Element's position from the viewport top
    const viewportCenter = window.innerHeight / 2;
    const distanceFromCenter = Math.abs(elemTop - viewportCenter);
    const maxDistance = window.innerHeight / 2; // Maximum distance for max glitch

    // Normalize the distance to a value between 0 and 1
    // 0 means the element is at the center of the viewport
    // 1 means the element is at the very top/bottom of the viewport
    const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

    const glitchIntensity = normalizedDistance * 20;
    const transX = (Math.random() - 0.5) * glitchIntensity;
    const transY = (Math.random() - 0.5) * glitchIntensity;
    const rotate = (Math.random() - 0.5) * glitchIntensity;

    glitchElem.style.setProperty("--glitch-width", `${glitchIntensity}px`);
    glitchElem.style.setProperty("--glitch-height", `${glitchIntensity}px`);
    glitchElem.style.setProperty("--glitch-transX", `${transX}px`);
    glitchElem.style.setProperty("--glitch-transY", `${transY}px`);
    glitchElem.style.setProperty("--glitch-rotate", `${rotate}deg`);
  });

  // For the <strong> element's letter spacing effect
  const scrolled = window.scrollY / window.innerHeight;
  const baseLetterSpacing = 0;
  const maxLetterSpacing = 43;
  const newLetterSpacing =
    baseLetterSpacing + (maxLetterSpacing - baseLetterSpacing) * scrolled;
  together.style.setProperty("--letter-spacing", `${newLetterSpacing}px`);
});

//! ======================= nav blob =======================
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // title in main is in viewport, shrink the blob in nav
      navBlob.classList.remove("grow");
      navBlob.classList.add("shrink");
    } else {
      // title in main is out of viewport, grow the blob in nav
      navBlob.classList.remove("shrink");
      navBlob.classList.add("grow");
    }
  });
}

//! ======================= all blob animation =======================
// Select the title in main section and the one in nav
const mainTitle = document.querySelector("section.main h1");
const navBlob = document.querySelector("nav .blob");

// Initialize the Intersection Observer
const observer = new IntersectionObserver(handleIntersection);

// Start observing the main blob
observer.observe(mainTitle);

const blobs1 = document.querySelectorAll(".blob1"); // select all blob1 elements

blobs1.forEach((blob1) => {
  const parentG = blob1.parentElement; // get the parent <g> of blob1
  const nextG = parentG.nextElementSibling; // get the next sibling <g>

  if (nextG) {
    const blob2 = nextG.querySelector(".blob2"); // select the blob2 from the next <g>

    if (blob2) {
      // if blob2 is found
      const tween = KUTE.fromTo(
        blob1,
        {
          path: blob1,
          attr: { fill: "#29A19C" }, // starting color
        },
        {
          path: blob2, // this blob2
          attr: { fill: "#A3F7BF" }, // ending color
        },
        { repeat: 999, duration: 3000, yoyo: true }
      );
      tween.start();
    }
  }
});

//! ======================= image blob animation =======================
const tween = KUTE.fromTo(
  "#blob1",
  {
    path: "#blob1",
  },
  {
    path: "#blob2",
  },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween.start();

//! ======================= parallax =======================
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    // Create a glow div and append it to each card
    const glow = document.createElement("div");
    glow.className = "glow";
    card.appendChild(glow);

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left; // x position within the element.
      const mouseY = e.clientY - rect.top; // y position within the element.

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const tiltX = (deltaY / centerY) * 4; // max tilt in degrees
      const tiltY = -(deltaX / centerX) * 4; // max tilt in degrees

      card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      glow.style.top = `${mouseY}px`;
      glow.style.left = `${mouseX}px`;
      glow.style.display = "block";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
      glow.style.display = "none";
    });
  });
});
