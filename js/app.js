const directBtn = document.getElementById("direct-btn");
const krishnaBtn = document.getElementById("krishna-btn");
const resultBox = document.getElementById("result-box");

function renderResult(text) {

resultBox.classList.remove("fade-in");
void resultBox.offsetWidth;

resultBox.textContent = text;

resultBox.classList.add("fade-in");
resultBox.classList.add("glow");

}

function handleDirectAnswer() {

const answer = getRandomItem(DirectAnswer);

renderResult(answer.text);

}

function handleKrishnaGuidance() {

const guidance = getRandomItem(KrishnaGuidance);

renderResult(guidance.text);

}

directBtn.addEventListener("click", handleDirectAnswer);
krishnaBtn.addEventListener("click", handleKrishnaGuidance);

if ("serviceWorker" in navigator) {

navigator.serviceWorker
.register("service-worker.js")
.then(() => console.log("Service Worker Registered"));

}