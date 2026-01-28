let currentPage = 1;

const reasons = [
  "Your smile makes my whole day brighter 😍",
  "You understand me like nobody else 🫶",
  "You make even boring days beautiful ✨",
  "You are my safe place ❤️",
  "Life feels perfect with you 💕",
  "You are my favorite notification 📱💖",
  "Every moment with you feels magical 💫"
];

function startExperience() {
  document.getElementById("bg-music").play();
  nextPage(2);
}

function nextPage(num) {
  document.getElementById("page" + currentPage).classList.remove("active");
  document.getElementById("page" + num).classList.add("active");
  currentPage = num;
}

function generateReason() {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  document.getElementById("reason").innerText = reason;
}

generateReason();

function moveButton() {
  const noBtn = document.querySelector(".no");
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  nextPage(6);
  startConfetti();
}

function startConfetti() {
  for (let i = 0; i < 120; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "fall 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}
`;
document.head.appendChild(style);
