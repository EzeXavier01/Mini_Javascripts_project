let items = [];
const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";
const warmColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#ffc6ff'];
const buttonColors = ['#ffcc99', '#ff9999', '#ff9966', '#ff9933', '#ffcc66'];
let colorIndex = 0;
let buttonColorIndex = 0;

// Function to render the list of items
function renderItems() {
    itemsDiv.innerHTML = ''; // Clear previous items

    if (items.length === 0) {
        itemsDiv.innerHTML = "<p>No items yet. Add one!</p>";
        return;
    }

    // Loop through the items and create elements
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("input");
        text.type = "text";
        text.value = item;
        text.style.marginRight = "10px";
        text.onchange = () => updateItem(idx, text.value); // Call updateItem when text is changed

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => removeItem(idx); // Attach the delete function

        container.appendChild(text);
        container.appendChild(deleteButton);
        itemsDiv.appendChild(container);
    }
   
}

// Function to load items from localStorage
function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems); // Load items from localStorage if they exist
    renderItems();
}

// Function to save items to localStorage
function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems); // Save the updated items list to localStorage
}

// Function to add a new item
function addItem() {
    const value = input.value.trim(); // Trim whitespace

    if (!value) {
        showPopupMessage("You cannot add an empty item");
        return;
    }

    items.push(value); // Add the new item to the list
    renderItems();
    input.value = ""; // Clear the input field
    saveItems();
    showPopupMessage("Item saved!");
}

// Function to remove an item
function removeItem(idx) {
    items.splice(idx, 1); // Remove the item at the given index
    renderItems();
    saveItems();
}

// Function to update an item
function updateItem(idx, newValue) {
    if (newValue.trim() === "") {
        alert("You cannot update to an empty value.");
        renderItems(); // Re-render to avoid empty input
        return;
    }

    items[idx] = newValue.trim(); // Update the item value
    saveItems();
}

// Function to show the list of items
function showItems() {
    renderItems(); // Display the items
}

// Function to show a popup message that fades away
function showPopupMessage(message) {
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.classList.add("popup-message");

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "0"; // Start fading after 2 seconds
    }, 2000);

    setTimeout(() => {
        document.body.removeChild(popup); // Remove after fade out
    }, 4000);
}

// Function to change the background color in sequence
function changeBackgroundColor() {
    colorIndex = (colorIndex + 1) % warmColors.length; // Cycle through the color array
    document.body.style.backgroundColor = warmColors[colorIndex];
}

// Function to change button colors
function changeButtonColors() {
    buttonColorIndex = (buttonColorIndex + 1) % buttonColors.length;
    const buttons = document.querySelectorAll(".main-btn");
    buttons.forEach(button => {
        button.style.backgroundColor = buttonColors[buttonColorIndex];
    });
}

// Set an interval to automatically change the background color every 3 seconds
function startAutoColorChange() {
    setInterval(changeBackgroundColor, 3000); // Change color every 3 seconds
}

// Set an interval to change button colors
function startButtonColorChange() {
    setInterval(changeButtonColors, 2000); // Change button colors every 2 seconds
}

// Initialize the TODO list when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadItems();
    startAutoColorChange(); // Start the automatic background color changing
    startButtonColorChange(); // Start the automatic button color changing
});

