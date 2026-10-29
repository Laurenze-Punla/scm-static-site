"use strict";

/**
 * onPageLoad – unique function that fires when the page is loaded.
 * Injects a welcome banner into the DOM and returns a result object.
 * Exported so Jest can unit-test it in isolation.
 *
 * @param {string} [username] - Optional display name (defaults to "Guest").
 * @returns {{ message: string, timestamp: number }} Result object.
 */
function onPageLoad(username) {
  var name =
    username && typeof username === "string" && username.trim() !== ""
      ? username.trim()
      : "Guest";
  var timestamp = Date.now();
  var message =
    "Welcome, " + name + "! SCM Static Site loaded successfully.";

  // Only touch the DOM when running in a real browser environment
  if (typeof document !== "undefined") {
    var banner = document.getElementById("welcome-banner");
    if (banner) {
      banner.textContent = message;
    }
  }

  return { message: message, timestamp: timestamp };
}

// ─── Browser-only code (guarded so Jest can safely require this file) ────────
if (typeof document !== "undefined") {
  // Smooth-scroll for the CTA button
  var ctaButton = document.getElementById("cta-btn");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      document
        .getElementById("features")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  // Display build timestamp in the About section
  function showBuildInfo() {
    var el = document.getElementById("build-info");
    if (el) {
      var now = new Date();
      el.textContent = "Page loaded at: " + now.toLocaleString();
    }
  }
  showBuildInfo();

  // Intersection Observer for fade-in animation on cards
  var cards = document.querySelectorAll(".card");
  var observer = new IntersectionObserver(
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

  // Run onPageLoad on page load
  onPageLoad();
}

// Export for Jest unit tests (CommonJS – used by Node/Jest)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { onPageLoad };
}
