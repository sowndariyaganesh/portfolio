// Typing animation setup
const roles = [" UI/UX Designer", " Software Developer", " Frontend Engineer", " Creative Coder"];
let index = 0;
let roleIndex = 0;
const element = document.getElementById("animated-role");

function typeRole() {
  const current = roles[roleIndex];
  index++;
  element.textContent = current.substring(0, index);

  if (index === current.length) {
    setTimeout(() => eraseRole(), 1500);
  } else {
    setTimeout(typeRole, 100);
  }
}

function eraseRole() {
  const current = roles[roleIndex];
  index--;
  element.textContent = current.substring(0, index);

  if (index === 0) {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  } else {
    setTimeout(eraseRole, 50);
  }
}

// Scroll animation logic
const scrollElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

scrollElements.forEach(el => observer.observe(el));

// Start animation after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});

