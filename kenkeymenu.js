function orderItem(itemName) {
  
    localStorage.setItem("orderedItem", itemName);
    window.location.href = "orderkenkey.html";
}