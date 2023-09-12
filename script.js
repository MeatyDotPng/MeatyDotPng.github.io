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
