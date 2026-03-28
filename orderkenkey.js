document.addEventListener("DOMContentLoaded", function () {
    const item = localStorage.getItem("orderedItem");
    const message = document.getElementById("message");

    if (item) {
        message.textContent = "You have ordered " + item;
        alert("You have ordered " + item);
    } else {
        message.textContent = "No item selected";
    }
});  