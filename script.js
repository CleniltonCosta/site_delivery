const checkbox = document.getElementById("theme-checkbox");
const icon = document.getElementById("theme-icon");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.src = "img/night-mode.png";
  } else {
    icon.src = "img/light-mode.png";
  }
});

// Iniciar com o ícone correto se o tema escuro estiver ativado
window.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "img/night-mode.png";
  } else {
    icon.src = "img/light-mode.png";
  }
});