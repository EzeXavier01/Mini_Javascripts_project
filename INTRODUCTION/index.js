const warmColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#ffc6ff'];
let colorIndex = 0;

const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector(".main-btn");

const careers = [
    "I am a Data Scientist", 
    "Data Analyst", 
    "A Fullstack Developer", 
    "AND ....",
    "An AI Engineer"
];

let careerIndex = 0;
let characterIndex = 0;
let isAnimating = false;

function showMessage() {
    if (isAnimating) return; // Prevents triggering multiple animations at the same time
    isAnimating = true;
    buttonEl.style.display = "none"; // Hide the button
    updateText();
}

function updateText() {
    if (careerIndex < careers.length) {
        characterIndex++;
        containerEl.innerHTML = `
            <h1>${careers[careerIndex].slice(0, characterIndex)}</h1>
        `;

        if (characterIndex === careers[careerIndex].length) {
            // Pause for 2 seconds before moving to the next career
            characterIndex = 0;
            careerIndex++;
            setTimeout(updateText, 2000); // 2-second delay between titles
        } else {
            setTimeout(updateText, 50); // Continue updating character by character
        }
    } else {
        // After all careers are displayed, wait 2 seconds and show the button again
        setTimeout(() => {
            containerEl.innerHTML = ""; // Clear the text
            buttonEl.style.display = "block"; // Show the button again
            careerIndex = 0; // Reset career index for next click
            isAnimating = false; // Reset animation state
        }, 2000); // Delay before showing the button again
    }
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = warmColors[colorIndex];
    colorIndex = (colorIndex + 1) % warmColors.length; // Cycle through colors
}

// Call changeBackgroundColor every 500 milliseconds
setInterval(changeBackgroundColor, 500);
