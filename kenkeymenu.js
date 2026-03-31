function orderItem(itemName) {
  
    localStorage.setItem("orderedItem", itemName);
    window.location.href = "orderkenkey.html";
}

const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');


searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        if(name.includes(term)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
});