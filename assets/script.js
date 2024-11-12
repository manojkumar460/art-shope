// Sample product data (can be replaced with dynamic data from your backend)
const products = [
    { id: 1, name: "Artwork Title 1", price: 50, img: "assets/images/download(1).jpg" },
    { id: 2, name: "Artwork Title 2", price: 60, img: "assets/images/download(2).jpg" },
    { id: 3, name: "Artwork Title 3", price: 70, img: "assets/images/download(3).jpg" },
    { id: 4, name: "Artwork Title 4", price: 50, img: "assets/images/download(4).jpg" },
    { id: 5, name: "Artwork Title 5", price: 50, img: "assets/images/download(5).jpg" },
    { id: 6, name: "Artwork Title 6", price: 50, img: "assets/images/download(6).jpg" },
    { id: 7, name: "Artwork Title 7", price: 50, img: "assets/images/download(7).jpg" },
    { id: 8, name: "Artwork Title 8", price: 50, img: "assets/images/download(8).jpg" },
    { id: 9, name: "Artwork Title 9", price: 50, img: "assets/images/download(9).jpg" },
    { id: 10, name: "Artwork Title 10", price: 50, img: "assets/images/download(10).jpg" },
   


    // Continue up to product 11
];

function viewProduct(id) {
    // Redirect to product page with product ID (simple implementation for now)
    window.location.href = "product.html";
}

function addToCart(id) {
    alert("Item added to cart!");
    // Here you could add code to save items to the cart (e.g., using session storage)
}
