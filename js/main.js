"use strict";

// Smooth-scroll for the CTA button
const ctaButton = document.getElementById("cta-btn");
if (ctaButton) {
  ctaButton.addEventListener("click", function () {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  });
}

// Display build timestamp in the About section
function showBuildInfo() {
  const el = document.getElementById("build-info");
  if (el) {
    const now = new Date();
    el.textContent = "Page loaded at: " + now.toLocaleString();
  }
}

showBuildInfo();

// Intersection Observer for fade-in animation on cards
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach(function (card) {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});
