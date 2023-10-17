//! =========================================== video play ===========================================
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  }, options);

  videos.forEach((video) => {
    observer.observe(video);
  });
});
//! =========================================== video play ===========================================

//? =========================================== page reload ===========================================
const video4 = document.querySelector("#p4 video");

video4.addEventListener("ended", function () {
  setTimeout(function () {
    location.reload();
  }, 3000);
});
//? =========================================== page reload ===========================================

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
