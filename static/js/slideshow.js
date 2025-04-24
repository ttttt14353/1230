window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".bg-slide");
    let current = 0;
  
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides.length > 0) {
      slides[0].classList.add("active"); // 最初の1枚だけ表示
    }
  
    function showNextSlide() {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[current].classList.add("active");
      current = (current + 1) % slides.length;
    }
  
    setInterval(showNextSlide, 7000); // 7秒ごとに切り替え
  });
  