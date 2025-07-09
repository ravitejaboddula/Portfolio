function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.querySelector(".footercontent p").innerHTML = `&copy; ${year} Ravi Teja. All rights reserved.`;
});
