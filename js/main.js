/* ================= SCROLL REVEAL ================= */
const cards = document.querySelectorAll('.value-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  },
  { threshold: 0.3 }
);

cards.forEach(card => observer.observe(card));

/* ================= SCROLL REVEAL ================= */
const items = document.querySelectorAll(".why-item");

const observer_why_section = new IntersectionObserver(
entries => {
    entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
        setTimeout(() => {
        entry.target.classList.add("reveal");
        }, index * 80);
    }
    });
},
{ threshold: 0.2 }
);

items.forEach(item => observer_why_section.observe(item));