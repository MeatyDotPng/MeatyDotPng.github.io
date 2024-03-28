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
  const baseLetterSpacing = 17;
  const maxLetterSpacing = 0;
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
          attr: { fill: "#fd305c" }, // starting color
        },
        {
          path: blob2, // this blob2
          attr: { fill: "#95dae9" }, // ending color
        },
        { repeat: 999, duration: 3000, yoyo: true }
      );
      tween.start();
    }
  }
});

//! ======================= play hover animation =======================
document.addEventListener("DOMContentLoaded", function () {
  const blobElements = document.querySelectorAll(".play");

  const blob1Path =
    "M98.6 -164.6C140.1 -146.7 194.8 -145.4 210.9 -120.7C226.9 -96 204.5 -48 206.2 1C207.9 50 233.9 100 218.2 125.4C202.5 150.8 145.3 151.6 102 162.3C58.7 172.9 29.3 193.5 -8.4 208.1C-46.2 222.6 -92.3 231.3 -128 216.2C-163.6 201.1 -188.8 162.3 -190.7 122.3C-192.6 82.3 -171.3 41.2 -175.8 -2.6C-180.3 -46.3 -210.5 -92.7 -204.8 -126C-199 -159.4 -157.3 -179.7 -117.1 -198.4C-77 -217 -38.5 -234 -5 -225.4C28.5 -216.7 57 -182.4 98.6 -164.6"; // original path data for blob1
  const blob2Path =
    "M76.4 -141C102.8 -117.1 130.7 -104.3 152.3 -82.7C174 -61 189.5 -30.5 206.4 9.7C223.3 50 241.5 100 228.8 137.1C216 174.2 172.3 198.4 129 215.4C85.7 232.4 42.8 242.2 0.2 241.9C-42.5 241.6 -85 231.2 -117.8 208.1C-150.5 185.1 -173.6 149.3 -200.1 112.5C-226.7 75.7 -256.9 37.8 -262.8 -3.4C-268.7 -44.7 -250.4 -89.3 -216.8 -114C-183.2 -138.7 -134.4 -143.4 -95.7 -160.2C-57 -177.1 -28.5 -206 -1.7 -203C25 -200 50 -164.9 76.4 -141"; // path data for blob2

  blobElements.forEach((blobElement) => {
    const tweenToBlob2 = KUTE.fromTo(
      blobElement,
      { path: blob1Path, attr: { fill: "#fd305c" } },
      { path: blob2Path, attr: { fill: "#95dae9" } },
      { duration: 500 }
    );

    const tweenToBlob1 = KUTE.fromTo(
      blobElement,
      { path: blob2Path, attr: { fill: "#95dae9" } },
      { path: blob1Path, attr: { fill: "#fd305c" } },
      { duration: 500 }
    );

    // Update here to bind the event listeners directly to the .play elements
    blobElement.addEventListener("mouseenter", function () {
      if (!tweenToBlob2.playing) {
        tweenToBlob1.stop();
        tweenToBlob2.start();
      }
    });

    blobElement.addEventListener("mouseleave", function () {
      if (!tweenToBlob1.playing) {
        tweenToBlob2.stop();
        tweenToBlob1.start();
      }
    });
  });
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

      const tiltX = (deltaY / centerY) * 5; // max tilt in degrees
      const tiltY = -(deltaX / centerX) * 5; // max tilt in degrees

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
