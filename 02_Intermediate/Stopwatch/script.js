let seconds = 0;
let tens = 0;
let isRunning = false;
let interval;

let second = document.getElementById("seconds");
let ten = document.getElementById("tens");
let startStopBtn = document.getElementById("start-stop-btn");
let resetBtn = document.getElementById("reset-btn");

// Start/Stop Button Event Listener
startStopBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(interval);  // Stop the timer
        startStopBtn.textContent = "Start";
        isRunning = false;
    } else {
        interval = setInterval(updateTime, 10);  // Start the timer
        startStopBtn.textContent = "Stop";
        isRunning = true;
    }
});

// Reset Button Event Listener
resetBtn.addEventListener("click", function() {
    clearInterval(interval);  // Stop the timer
    isRunning = false;
    seconds = 0;
    tens = 0;
    second.textContent = '00';  // Reset seconds
    ten.textContent = '00';  // Reset tens
    startStopBtn.textContent = 'Start';  // Reset button text
});

// Update Time Function
function updateTime() {
    tens++;

    // If 100 milliseconds have passed, increment the seconds
    if (tens === 100) {
        tens = 0;
        seconds++;
    }

    // Format the time display (always two digits)
    second.textContent = seconds < 10 ? '0' + seconds : seconds;
    ten.textContent = tens < 10 ? '0' + tens : tens;
}
