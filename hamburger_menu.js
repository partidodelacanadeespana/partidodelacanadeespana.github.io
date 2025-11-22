const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Desplazamiento suave (smooth scrolling) para enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Envío del formulario
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Mostrar mensaje de éxito
  successMessage.classList.add("show");

  // Resetear formulario
  contactForm.reset();

  // Ocultar mensaje de éxito después de 5 segundos
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 5000);

  // Desplazarse al mensaje de éxito
  successMessage.scrollIntoView({ behavior: "smooth" });
});

// Intersection Observer para animaciones de aparición (fade-in)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar todas las tarjetas
document.querySelectorAll(".propuesta-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(card);
});

// Añadir efecto de desplazamiento al encabezado (header)
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
  }

  lastScroll = currentScroll;
});

// Añadir efecto hover a los botones CTA
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#B87830";
  });

  button.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#CC8B3A";
  });
});
