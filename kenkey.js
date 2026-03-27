function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function orderItem(itemName) {
    alert("You selected: " + itemName);
}