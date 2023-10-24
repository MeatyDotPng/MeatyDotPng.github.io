const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const li = document.querySelector("header ul li:first-child");

//? image alternation animation
let intervalId; // Variable to store the interval ID for stopping the alternation

//* head animation
function pile3Alternating() {
  let divElement = document.querySelector(".pile3");
  let isFirstImage = true;

  // Start the interval to alternate between the two images
  intervalId = setInterval(() => {
    // Toggle between the two images
    if (isFirstImage) {
      divElement.style.backgroundImage = "url('svg/headOpen.svg')";
    } else {
      divElement.style.backgroundImage = "url('svg/headClosed.svg')";
    }

    // Toggle the flag for the next iteration
    isFirstImage = !isFirstImage;
  }, 500); // 1000ms = 1 second, adjust the interval as desired
}

function pile3StopAlternating() {
  let divElement = document.querySelector(".pile3");

  // Stop the alternation by clearing the interval
  clearInterval(intervalId);

  // Set the default background image when the mouse leaves
  divElement.style.backgroundImage = "url('svg/headClosed.svg')"; // Set to "none" or remove this line to have no background image when not alternating
}

//* hand animation
function pile1Alternating() {
  let divElement = document.querySelector(".pile1");
  let isFirstImage = true;

  // Start the interval to alternate between the two images
  intervalId = setInterval(() => {
    // Toggle between the two images
    if (isFirstImage) {
      divElement.style.backgroundImage = "url('svg/armOpen.svg')";
    } else {
      divElement.style.backgroundImage = "url('svg/armClosed.svg')";
    }

    // Toggle the flag for the next iteration
    isFirstImage = !isFirstImage;
  }, 500); // 1000ms = 1 second, adjust the interval as desired
}

function pile1StopAlternating() {
  let divElement = document.querySelector(".pile1");

  // Stop the alternation by clearing the interval
  clearInterval(intervalId);

  // Set the default background image when the mouse leaves
  divElement.style.backgroundImage = "url('svg/armClosed.svg')"; // Set to "none" or remove this line to have no background image when not alternating
}

//* foot animation
function pile5Alternating() {
  let divElement = document.querySelector(".pile5");
  let isFirstImage = true;

  // Start the interval to alternate between the two images
  intervalId = setInterval(() => {
    // Toggle between the two images
    if (isFirstImage) {
      divElement.style.backgroundImage = "url('svg/footOpen.svg')";
    } else {
      divElement.style.backgroundImage = "url('svg/footClosed.svg')";
    }

    // Toggle the flag for the next iteration
    isFirstImage = !isFirstImage;
  }, 500); // 1000ms = 1 second, adjust the interval as desired
}

function pile5StopAlternating() {
  let divElement = document.querySelector(".pile5");

  // Stop the alternation by clearing the interval
  clearInterval(intervalId);

  // Set the default background image when the mouse leaves
  divElement.style.backgroundImage = "url('svg/footClosed.svg')"; // Set to "none" or remove this line to have no background image when not alternating
}
//?

//! scroll character swap
const main = document.getElementById("main");
const imageElement = document.getElementById("image");
const images = ["img/character.png", "img/family.png", "img/enemy.png"];
let currentImageIndex = 0;

document.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  // Check if the pressed key is left or right arrow key
  if (event.keyCode === 37) {
    // Left arrow key
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  } else if (event.keyCode === 39) {
    // Right arrow key
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  imageElement.src = images[currentImageIndex];
}

//!

function toggleHidden(element) {
  element.classList.toggle("cloaked");
}

//! ============================== Parallax ============================== !//
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

let rotateDegree = 0;

function update(cursorPostition) {
  parallax_el.forEach((el) => {
    let speed = el.dataset.speed;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (cursorPostition - parseFloat(getComputedStyle(el).left)) *
      isInLeft *
      0.1;

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speed
    }px)) rotateY(${rotateDegree * rotateSpeed}deg) translateY(calc(-50% + ${
      -yValue * speed
    }px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
  });
}

update(0);

window.addEventListener("mousemove", (e) => {
  if (timeline.isActive()) return;

  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
});

//! ============================== GSAP Animation ============================== !//

let timeline = gsap.timeline();

//? =============== bg Animation =============== ?//
Array.from(parallax_el)
  .filter((el) => !el.classList.contains("character"))
  .forEach((el) => {
    timeline.from(
      el,
      {
        top: `${el.offsetHeight * 2 + +el.dataset.distance}px`,
        duration: 2,
        ease: "power3.out",
      },
      "1"
    );
  });

//? =============== Character Animation =============== ?//
timeline
  .from(
    ".character",
    {
      top: `1850px`,
      duration: 2,
      ease: "power3.out",
    },
    "1"
  )
  .from(
    ".hide",
    {
      opacity: 0,
      duration: 1.5,
    },
    "1"
  );

//! =========================================== blob animation ===========================================
const navBlob = document.querySelector("nav .blob");

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
//! =========================================== blob animation ===========================================
