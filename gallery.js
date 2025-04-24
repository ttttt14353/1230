document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-thumb");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
  
    let currentIndex = 0;
    const imageList = Array.from(images).map(img => img.src);
  
    function showImage(index) {
      currentIndex = index;
      lightboxImg.src = imageList[currentIndex];
      lightbox.style.display = "block";
    }
  
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        showImage(index);
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % imageList.length;
      showImage(currentIndex);
    });
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
      showImage(currentIndex);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const thumbs = document.querySelectorAll(".gallery-thumb");
  
    thumbs.forEach(img => {
      img.addEventListener("load", () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        if (ratio < 1) {
          img.classList.add("portrait");
        } else {
          img.classList.add("landscape");
        }
      });
    });
  });
  