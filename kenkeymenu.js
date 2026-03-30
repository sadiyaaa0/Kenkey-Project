function orderItem(itemName) {
  
    localStorage.setItem("orderedItem", itemName);
    window.location.href = "orderkenkey.html";
}
// Grab the search input and all cards
const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');

// Listen for input changes
searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        if(name.includes(term)) {
            card.style.display = 'block'; // show matching card
        } else {
            card.style.display = 'none'; // hide non-matching
        }
    });
});