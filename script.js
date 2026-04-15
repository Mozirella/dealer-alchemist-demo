const button = document.getElementById("ctaBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "✨ Spell Cast! Conversions Increased ✨";
  button.textContent = "Alchemy Complete";
  button.style.background = "#22c55e";
});
