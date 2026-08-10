const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

// ==============================
// Mobile Menu
// ==============================
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", event => {
    if (
      nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      nav.classList.remove("open");
      menuButton.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

// ==============================
// Current Year
// ==============================
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ==============================
// Header Scroll Effect
// ==============================
const header = document.querySelector(".header");

function updateHeader() {
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 30);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// ==============================
// Scroll Reveal
// ==============================
const revealTargets = document.querySelectorAll(
  ".section-heading, .app-card, .profile-card, .social-card, .support-panel"
);

revealTargets.forEach(element => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealTargets.forEach(element => {
  revealObserver.observe(element);
});

// ==============================
// App Card Stagger
// ==============================
document.querySelectorAll(".app-card").forEach((card, index) => {
  card.style.setProperty("--delay", `${index * 80}ms`);
});

// ==============================
// Social Card Stagger
// ==============================
document.querySelectorAll(".social-card").forEach((card, index) => {
  card.style.setProperty("--delay", `${index * 70}ms`);
});

// ==============================
// Hero Floating Effect
// ==============================
const heroArt = document.querySelector(".hero-art");

if (heroArt && window.matchMedia("(pointer: fine)").matches) {
  heroArt.addEventListener("mousemove", event => {
    const rect = heroArt.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroArt.style.setProperty("--mouse-x", `${x * 10}px`);
    heroArt.style.setProperty("--mouse-y", `${y * 10}px`);
  });

  heroArt.addEventListener("mouseleave", () => {
    heroArt.style.setProperty("--mouse-x", "0px");
    heroArt.style.setProperty("--mouse-y", "0px");
  });
}
