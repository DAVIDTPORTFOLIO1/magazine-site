/* ===== Typewriter ===== */
const textArray = [
  "Trainee Web Developer",
  "AI-Assisted Development",
  "Building modern, responsive websites"
];

const typeElement = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typeElement.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();

/* ===== Scroll Reveal ===== */
const reveals = document.querySelectorAll(".project-card");


function revealOnScroll() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
/* ===== Project Slide-in (Intersection Observer) ===== */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  cards.forEach(card => observer.observe(card));
});
