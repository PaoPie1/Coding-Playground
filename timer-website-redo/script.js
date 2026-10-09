const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let centiseconds = 0;
let timerId = null;

function pad(number) {
  return number.toString().padStart(2, "0");
}

function updateTimer() {
  const cs = centiseconds % 100;
  const seconds = Math.floor((centiseconds / 100) % 60);
  const minutes = Math.floor(((centiseconds / 100) % 3600) / 60);
  const hours = Math.floor(centiseconds / 100 / 3600);
  timer.textContent =
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ":" + pad(cs);
}

startBtn.addEventListener("click", () => {
  if (timerId !== null) {
    return;
  }
  timerId = setInterval(() => {
    centiseconds = centiseconds + 1;
    updateTimer();
  }, 10);
});

pauseBtn.addEventListener("click", () => {
  if (timerId === null) {
    return;
  }

  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  centiseconds = 0;
  updateTimer();
});
