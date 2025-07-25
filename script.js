const checkbox = document.getElementById("theme-checkbox");
const icon = document.querySelector(".slider .icon");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.style.backgroundImage = 'url("img/night-mode.png")';
  } else {
    icon.style.backgroundImage = 'url("img/light-mode.png")';
  }
});

// Garante que o ícone carregue corretamente no primeiro carregamento
window.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("dark-mode")) {
    icon.style.backgroundImage = 'url("img/night-mode.png")';
  } else {
    icon.style.backgroundImage = 'url("img/light-mode.png")';
  }
});
