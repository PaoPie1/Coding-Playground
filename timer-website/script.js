const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let timerId = null;

function updateDisplay() {
  display.textContent = seconds;
}

startBtn.addEventListener("click", function () {
  if (timerId !== null) {
    return;
  }
  timerId = setInterval(function () {
    seconds = seconds + 1;
    updateDisplay();
  }, 1000);
  console.log("Ticket: ", timerId);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", function () {
  console.log("Reset was clicked!");
});

updateDisplay();
