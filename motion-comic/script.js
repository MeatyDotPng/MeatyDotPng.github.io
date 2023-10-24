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
document.addEventListener("DOMContentLoaded", function () {
  const blobElements = document.querySelectorAll(".play");

  const blob1Path =
    "M98.6 -164.6C140.1 -146.7 194.8 -145.4 210.9 -120.7C226.9 -96 204.5 -48 206.2 1C207.9 50 233.9 100 218.2 125.4C202.5 150.8 145.3 151.6 102 162.3C58.7 172.9 29.3 193.5 -8.4 208.1C-46.2 222.6 -92.3 231.3 -128 216.2C-163.6 201.1 -188.8 162.3 -190.7 122.3C-192.6 82.3 -171.3 41.2 -175.8 -2.6C-180.3 -46.3 -210.5 -92.7 -204.8 -126C-199 -159.4 -157.3 -179.7 -117.1 -198.4C-77 -217 -38.5 -234 -5 -225.4C28.5 -216.7 57 -182.4 98.6 -164.6"; // original path data for blob1
  const blob2Path =
    "M76.4 -141C102.8 -117.1 130.7 -104.3 152.3 -82.7C174 -61 189.5 -30.5 206.4 9.7C223.3 50 241.5 100 228.8 137.1C216 174.2 172.3 198.4 129 215.4C85.7 232.4 42.8 242.2 0.2 241.9C-42.5 241.6 -85 231.2 -117.8 208.1C-150.5 185.1 -173.6 149.3 -200.1 112.5C-226.7 75.7 -256.9 37.8 -262.8 -3.4C-268.7 -44.7 -250.4 -89.3 -216.8 -114C-183.2 -138.7 -134.4 -143.4 -95.7 -160.2C-57 -177.1 -28.5 -206 -1.7 -203C25 -200 50 -164.9 76.4 -141"; // path data for blob2

  blobElements.forEach((blobElement) => {
    const tweenToBlob2 = KUTE.fromTo(
      blobElement,
      { path: blob1Path, attr: { fill: "#29A19C" } },
      { path: blob2Path, attr: { fill: "#A3F7BF" } },
      { duration: 500 }
    );

    const tweenToBlob1 = KUTE.fromTo(
      blobElement,
      { path: blob2Path, attr: { fill: "#A3F7BF" } },
      { path: blob1Path, attr: { fill: "#29A19C" } },
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
//! =========================================== blob animation ===========================================
