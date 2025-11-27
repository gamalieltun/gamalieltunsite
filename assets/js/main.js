// main.js
// Handles mobile nav toggle + footer year

(function () {
    const navToggle = document.getElementById("navToggle");
    const siteNav = document.getElementById("siteNav");
    const yearSpan = document.getElementById("year");
  
    // Set footer year
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Mobile nav toggle
    if (navToggle && siteNav) {
      navToggle.addEventListener("click", function () {
        const isOpen = siteNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
  
      // Close menu when clicking a link (mobile UX)
      siteNav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          siteNav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  })();
  