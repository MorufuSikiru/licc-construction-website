

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));

const menuToggle = document.getElementById("menuToggle");
const navBar = document.getElementById("navBar");

if (menuToggle && navBar) {
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navBar.classList.toggle("active");
  });
}

