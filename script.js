// Typing effect
const message = "Every heartbeat whispers your name, Tracy ❤️";
let index = 0;
function typeMessage() {
  if (index < message.length) {
    document.getElementById("loveMessage").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, 100);
  }
}
typeMessage();

// Falling petals
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
for (let i = 0; i < 40; i++) {
  petals.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*8+3,
    speed: Math.random()*1.5+0.5,
    drift: Math.random()*1-0.5
  });
}

function drawPetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff69b4"; // rose color
  petals.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fill();
  });
}

function updatePetals() {
  petals.forEach(p => {
    p.y += p.speed;
    p.x += p.drift;
    if (p.y > canvas.height) { p.y = -p.size; p.x = Math.random()*canvas.width; }
  });
}

function animate() {
  drawPetals();
  updatePetals();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Floating hearts on click
document.addEventListener("click", e => {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.className = "heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

// Pop-up love messages
const popups = [
  "I love you more every day 💕",
  "You are my sunshine, Tracy 🌹",
  "Forever yours ❤️"
];

function showPopup() {
  const popup = document.getElementById("popupMessage");
  const msg = popups[Math.floor(Math.random()*popups.length)];
  popup.innerHTML = msg;
  popup.style.opacity = 1;
  setTimeout(() => { popup.style.opacity = 0; }, 3000);
}

setInterval(showPopup, 5000);
