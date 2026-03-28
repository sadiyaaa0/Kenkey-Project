const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {
    window.location.href = "kenkeymenu.html";
});

function orderItem(itemName) {
    localStorage.setItem("orderedItem", itemName);

    window.location.href = "order.html";
}