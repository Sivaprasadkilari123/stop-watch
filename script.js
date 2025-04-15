const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.getElementById("laps");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let lapCount = 1;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);

function startTimer() {
    clearInterval(interval); // Clear any existing interval

    interval = setInterval(() => {
        milliseconds += 10;

        if (milliseconds === 1000) {
            seconds++;
            milliseconds = 0;

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
        }

        displayTime();
    }, 10);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 1;
    displayTime();
    lapsList.innerHTML = ""; // Clear lap list
}

function recordLap() {
    const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsList.appendChild(lapItem);
    lapCount++;
}

function displayTime() {
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
    millisecondsEl.textContent = pad(milliseconds);
}

function pad(number) {
    return (number < 10 ? "0" : "") + number;
}