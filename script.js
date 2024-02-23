
// Initialize array
let numbers = [1, 2, 3, 4, 5];

// Function to display array
function displayArray() {
    document.getElementById("arrayDisplay").textContent = numbers.join(", ");
}

// Add event listener to "Add Element" button
document.getElementById("addButton").addEventListener("click", function() {
    let newValue = parseInt(prompt("Enter a number to add:"));
    if (!isNaN(newValue)) {
        numbers.push(newValue);
        displayArray();
    } else {
        alert("Invalid input. Please enter a number.");
    }
});



// Add event listener to "Find Index" button
document.getElementById("findIndexButton").addEventListener("click", function() {
    let valueToFind = parseInt(prompt("Enter a number to find its index:"));
    if (!isNaN(valueToFind)) {
        let index = numbers.indexOf(valueToFind);
        if (index !== -1) {
            alert("Index of " + valueToFind + " is " + index);
        } else {
            alert(valueToFind + " not found in the array.");
        }
    } else {
        alert("Invalid input. Please enter a number.");
    }
});

// Initial display of the array
displayArray();
