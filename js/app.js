const directBtn = document.getElementById("direct-btn");
const krishnaBtn = document.getElementById("krishna-btn");
const resultBox = document.getElementById("result-box");

function renderResult(text) {
    resultBox.textContent = text;
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