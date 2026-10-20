// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("siteNav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Highlight the nav link for the section in view
const links = [...nav.querySelectorAll("a")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();