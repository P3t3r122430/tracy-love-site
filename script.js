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

// Falling petals animation
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
for (let i = 0; i < 30; i++) {
    petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 1 + 0.5,
        drift: Math.random() * 1 - 0.5
    });
}

function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "pink";
    petals.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updatePetals() {
    petals.forEach(p => {
        p.y += p.speed;
        p.x += p.drift;
        if (p.y > canvas.height) {
            p.y = -p.size;
            p.x = Math.random() * canvas.width;
        }
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
