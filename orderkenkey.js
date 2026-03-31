document.addEventListener("DOMContentLoaded", function () {
    const item = localStorage.getItem("orderedItem");
    const message = document.getElementById("message");

    if (item) {
        message.textContent =  "Your order of " + item + " has been placed successfully!";

        localStorage.removeItem("orderedItem");

    } else {
        message.textContent = " No item selected. Please go back to the menu.";
    }
});