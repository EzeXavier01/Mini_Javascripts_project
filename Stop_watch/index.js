let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")
const body = document.getElementsByTagName("body")[0]
const warmColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#ffc6ff'];
let colorIndex = 0;
function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}

// Function to change the background color in sequence
function changeBackgroundColor() {
    colorIndex = (colorIndex + 1) % warmColors.length; // Cycle through the color array
    document.body.style.backgroundColor = warmColors[colorIndex];
}

// Set an interval to automatically change the background color every 3 seconds
function startAutoColorChange() {
    setInterval(changeBackgroundColor, 3500); // Change color every 3 seconds
}


// Initialize the TODO list when the page loads
document.addEventListener("DOMContentLoaded", () => {

    startAutoColorChange(); // Start the automatic background color changing
});
