const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let centiseconds = 0;
let timerId = null;

function pad(number) {
  return String(number).padStart(2, "0");
}

function updateDisplay() {
  const cs = centiseconds % 100;
  const seconds = Math.floor(centiseconds / 100) % 60;
  const minutes = Math.floor(((centiseconds / 100) % 3600) / 60);
  const hours = Math.floor(centiseconds / 100 / 3600);
  display.textContent =
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ":" + pad(cs);
}

startBtn.addEventListener("click", function () {
  if (timerId !== null) {
    return;
  }

  timerId = setInterval(function () {
    centiseconds = centiseconds + 1;
    updateDisplay();
  }, 10);
  console.log("Ticket: ", timerId);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
  centiseconds = 0;
  updateDisplay();
});

updateDisplay();
