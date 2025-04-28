// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("content").textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("main-heading").style.color = "blue";
document.getElementById("main-heading").style.fontSize = "24px";

// Add or remove an element when a button is clicked
document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let element = document.getElementById("extraElement");
    if (element.style.display === "none") {
        element.style.display = "block"; // Show element
    } else {
        element.style.display = "none"; // Hide element
    }
});
