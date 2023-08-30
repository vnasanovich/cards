const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll(".slide");
  slides[activeSlide].classList.add("active");
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      if (slide.classList.contains("active")) {
        slide.classList.remove("active");
        return;
      }
      clearActiveClasses();
      slide.classList.add("active");
    });
  });
  const clearActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
};
slidesPlugin();
