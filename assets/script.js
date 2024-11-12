// Sample product data (can be replaced with dynamic data from your backend)
const products = [
    { id: 1, name: "Artwork Title 1", price: 50, img: "images/download (1).jpeg" },
    { id: 2, name: "Artwork Title 2", price: 60, img: "images/download (2).jpeg" },
    { id: 3, name: "Artwork Title 3", price: 70, img: "images/download (3).jpeg" },
    // Add more products as needed up to 11
];

function viewProduct(id) {
    // Redirect to product page with product ID (simple implementation for now)
    window.location.href = "product.html";
}

function addToCart(id) {
    alert("Item added to cart!");
    // Here you could add code to save items to the cart (e.g., using session storage)
}
