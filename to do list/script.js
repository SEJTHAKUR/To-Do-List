let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

// Event listener for adding items on pressing Enter
inputBx.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let value = this.value.trim(); // Remove extra spaces
        if (value) {
            addItem(value); // Add the item if not empty
            this.value = ""; // Clear the input box
        }
    }
});

// Function to create and append a list item
let addItem = (itemText) => {
    let listItem = document.createElement("li"); // Create a <li> element

    let itemTextNode = document.createTextNode(itemText); // Create a text node for the item
    listItem.appendChild(itemTextNode); // Append the text to the list item

    // Create the delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "✖"; // Cross symbol
    deleteButton.onclick = function () {
        listItem.remove(); // Remove the list item when the button is clicked
    };

    listItem.appendChild(deleteButton); // Append the delete button to the list item
    list.appendChild(listItem); // Append the list item to the list
};
