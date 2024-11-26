window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight * 0.8) {
      section.classList.add("visible");
    }
  });
});

const socialIcons = document.querySelectorAll(".social-icon");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "transform 0.3s ease";
  });

  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

const especialidadesBoxes = document.querySelectorAll(".especialidades-box");
especialidadesBoxes.forEach((box, index) => {
  box.style.opacity = "0";
  box.style.transform = "translateY(50px)";

  window.addEventListener("scroll", () => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight * 0.8) {
      box.style.transition = "transform 0.8s, opacity 0.8s";
      box.style.transform = "translateY(0)";
      box.style.opacity = "1";
    }
  });
});

const projectImages = document.querySelectorAll(".img-port");
projectImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.5s ease";
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });
});
