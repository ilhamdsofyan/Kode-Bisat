const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const resetButton = document.querySelector("#reset-button");

const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");

const winningSelect = document.querySelector("#winning-point");

let p1Score = 0;
let p2Score = 0;
let winPoint = 0;
let isGameOver = false;

winningSelect.addEventListener("change", function (e) {
  winPoint = parseInt(this.value);

  resetButton.click();
});

p1Button.addEventListener("click", (e) => {
  e.preventDefault();

  addScore(1);
});

p2Button.addEventListener("click", (e) => {
  e.preventDefault();

  addScore(2);
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();

  p1Score = 0;
  p2Score = 0;
  isGameOver = false;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  p1Display.style.color = "#f94f6d";
  p2Display.style.color = "#f94f6d";
});

function addScore(player) {
  if (!winPoint) {
    alert("Pilih winning point terlebih dahulu");
    return false;
  }

  if (isGameOver) {
    return false;
  }

  if (player == 1) {
    p1Score += 1;

    p1Display.textContent = p1Score;
  } else if (player == 2) {
    p2Score += 1;

    p2Display.textContent = p2Score;
  }

  if (p1Score === winPoint) {
    p1Display.style.color = "green";

    isGameOver = true;
  }

  if (p2Score === winPoint) {
    p2Display.style.color = "green";

    isGameOver = true;
  }
}
