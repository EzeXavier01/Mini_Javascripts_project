const input = document.getElementById("input")

function check() {
    const value = input.value.trim(); // Get input value and remove extra spaces
    const lowerValue = value.toLowerCase(); // Convert input to lowercase
    const reversedValue = lowerValue.split("").reverse().join(""); // Reverse the lowercase string

    if (value === "") {
        alert("Wrong, Input a Value!"); // Check if the input is empty
    } else if (reversedValue === lowerValue) {
        alert("Correct!"); // Check if the input is a palindrome (case-insensitive)
    } else {
        alert("Wrong, try again"); // Non-palindrome case
    }

    input.value = ""; // Clear the input field after checking
}


// function check(){
//     const value = input.value
//     const reverse = value.toLowerCase()
//     const lower = reverse.split("").reverse().join("")
//     // alert(reverse)

//     if(lower === reverse && lower != ""){
//         alert("Correct!")
//     }
//     else if(lower == ""){
//         alert("Wrong, Input a Value!")
//     }
//     else{
//         alert("wrong, try again")
    
//     input.value = ""

//     }

// }