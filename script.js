const lines = [
  "Message:",
  "",
  "Hey my Love, if you accept my love, I will update you daily with a red rose in the morning.",
  "I can also code your C, JAVA, PHP and ActionScript programming for you.",
  "I can prepare coffee for you (my mom taught me once).",
  "",
  "I can love you till my end — you will be happy; don't worry about jobs, I will do everything for you.",
  "You just need to accept me as I am, and that's all.",
  "",
  "Not many people fall in true love, and not many experience it. I want you to experience me — just accept me.",
  "If you wish, I will never come to your face, never get noticed — just accept me.",
  "",
  "My life is a big secret which I cannot tell anyone; you just need to accept the way I am.",
  "I'll support you everywhere and every time. Please accept my proposal because I can't live without you.",
  "I don't have any other girl in my life; I made this for you.",
  "",
  "I M in Love With you... or I should say... I love You..",
  "",
  "---= :):):):):):):):):):):):):):):) =----",
  "",
  "",
  "Yours,",
  "JAIVEER (D3V1LJA1)"
];

const output = document.getElementById('output');
const skipBtn = document.getElementById('skipBtn');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const sparklesContainer = document.getElementById('sparklesContainer');
const confettiContainer = document.getElementById('confettiContainer');

const charDelay = 30;
const lineDelay = 300;

let typing = true;
let idxLine = 0, idxChar = 0;
let timer = null;
let musicPlaying = false;

function typeStep() {
  if (!typing) return;
  if (idxLine >= lines.length) {
    clearTimeout(timer);
    createConfetti();
    return;
  }

  const line = lines[idxLine];
  if (idxChar < line.length) {
    const span = document.createElement('span');
    span.textContent = line.charAt(idxChar);
    output.appendChild(span);
    idxChar++;
    timer = setTimeout(typeStep, charDelay);
    
    if (Math.random() > 0.7) {
      createSparkle();
    }
  } else {
    output.appendChild(document.createElement('br'));
    idxLine++;
    idxChar = 0;
    timer = setTimeout(typeStep, lineDelay);
  }
  window.scrollTo(0, document.body.scrollHeight);
}

function showFullMessage() {
  if (timer) clearTimeout(timer);
  typing = false;
  output.innerHTML = lines.join('<br>');
  createConfetti();
}

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  sparklesContainer.appendChild(sparkle);
  
  setTimeout(() => sparkle.remove(), 1500);
}

function createConfetti() {
  const colors = ['🌹', '🌺', '🌸', '🌷', '💚', '💙', '💜', '⭐'];
  
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-20px';
      confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
      confetti.style.opacity = '1';
      
      confettiContainer.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 3000);
    }, i * 50);
  }
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch(e => console.log('Audio play failed:', e));
    musicPlaying = true;
    musicToggle.classList.add('playing');
    musicToggle.textContent = '🎵';
  } else {
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.classList.remove('playing');
    musicToggle.textContent = '🔊';
  }
}

function playMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch(e => console.log('Audio play failed:', e));
  }
}

window.addEventListener('load', () => {
  bgMusic.src = "Pink Lips Hate Story 2 320 Kbps.mp3";
  bgMusic.volume = 0.6;
  playMusic();
  typeStep();
});

bgMusic.addEventListener('play', () => {
  musicPlaying = true;
  musicToggle.classList.add('playing');
  musicToggle.textContent = '🎵';
});

bgMusic.addEventListener('pause', () => {
  musicPlaying = false;
  musicToggle.classList.remove('playing');
  musicToggle.textContent = '🔊';
});

skipBtn.addEventListener('click', () => {
  if (timer) clearTimeout(timer);
  showFullMessage();
});

musicToggle.addEventListener('click', toggleMusic);
document.addEventListener('click', playMusic, { once: true });
