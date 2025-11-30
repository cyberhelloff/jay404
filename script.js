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

const charDelay = 40;
const lineDelay = 400;

let typing = true;
let idxLine = 0, idxChar = 0;
let timer = null;

function typeStep() {
  if (!typing) return;
  if (idxLine >= lines.length) {
    clearTimeout(timer);
    return;
  }

  const line = lines[idxLine];
  if (idxChar < line.length) {
    const span = document.createElement('span');
    span.textContent = line.charAt(idxChar);
    output.appendChild(span);
    idxChar++;
    timer = setTimeout(typeStep, charDelay);
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
}

window.addEventListener('load', () => {
  typeStep();
});

skipBtn.addEventListener('click', () => {
  if (timer) clearTimeout(timer);
  showFullMessage();
});
