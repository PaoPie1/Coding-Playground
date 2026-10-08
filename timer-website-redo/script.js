const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
centiseconds = 0;

function updateTimer() {
  timer.textContent = centiseconds;
}

startBtn.addEventListener("click", () => {
  setInterval(() => {
    centiseconds = centiseconds + 10;
    updateTimer();
    console.log(centiseconds);
  }, 100);
});
