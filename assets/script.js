// Sample JavaScript to dynamically add items to the cart
document.addEventListener("DOMContentLoaded", () => {
    const cartSection = document.querySelector('.cart-items');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        cartSection.innerHTML = '<p>Your cart is currently empty.</p>';
    } else {
        cartSection.innerHTML = '';
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>Price: $${item.price}</p>
            `;
            cartSection.appendChild(itemElement);
        });
    }
});
