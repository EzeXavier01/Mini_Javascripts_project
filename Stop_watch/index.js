let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")
const body = document.getElementsByTagName("body")[0]
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

function randomColor(){
    const red = Math.round(Math.random() *255)
    const blue = Math.round(Math.random() *255)
    const green = Math.round(Math.random() *255)
  
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color
  }
