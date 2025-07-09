// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// AUTO COPYRIGHT YEAR
function updateCopyrightYear() {
  const footer = document.querySelector(".footercontent p");
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Ravi Teja. All rights reserved.`;
}

// RUN ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  updateCopyrightYear();
});
