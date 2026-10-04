const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", function () {
  console.log("Start was clicked!");
});

pauseBtn.addEventListener("click", function () {
  console.log("Pause was clicked!");
});

resetBtn.addEventListener("click", function () {
  console.log("Reset was clicked!");
});
