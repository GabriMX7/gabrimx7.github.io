const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
  elapsedTime += Date.now() - startTime;
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  timerDisplay.textContent = '00:00';
}

function updateTimer() {
  const currentTime = Date.now();
  const delta = currentTime - startTime;
  const totalElapsedTime = elapsedTime + delta;
  const seconds = Math.floor((totalElapsedTime / 1000) % 60);
  const minutes = Math.floor((totalElapsedTime / (1000 * 60)) % 60);
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
