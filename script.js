const button = document.getElementById("ctaBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "✨ Spell Cast! Conversions Increased ✨";
  button.textContent = "Alchemy Complete";
  button.style.background = "#22c55e";
});

const sparkle = document.querySelector(".sparkle");

button.addEventListener("click", () => {
  message.textContent = "✨ Spell Cast! Conversions Increased ✨";
  sparkle.textContent = "🧙‍♂️✨💰";
  sparkle.style.opacity = 1;
});

button.addEventListener("click", () => {
  message.textContent = "✨ Spell Cast! Conversions Increased ✨";
  button.textContent = "Alchemy Complete";
  button.style.background = "#22c55e";
  button.style.boxShadow = "0 0 30px rgba(34,197,94,0.9)";
});
