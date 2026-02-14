const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});
