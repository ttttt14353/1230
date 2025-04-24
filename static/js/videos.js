document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");
  
    videos.forEach(video => {
      video.addEventListener("play", () => {
        videos.forEach(v => {
          if (v !== video) {
            v.pause();
            v.currentTime = 0;
            v.parentElement.classList.remove("active");
          }
        });
        video.parentElement.classList.add("active");
      });
  
      video.addEventListener("pause", () => {
        video.parentElement.classList.remove("active");
      });
    });
  });
  