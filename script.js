const products = [
    { id: 1, name: "Produit 1", price: 29.99, image: "https://via.placeholder.com/250?text=Produit+1" },
    { id: 2, name: "Produit 2", price: 49.99, image: "https://via.placeholder.com/250?text=Produit+2" },
    { id: 3, name: "Produit 3", price: 19.99, image: "https://via.placeholder.com/250?text=Produit+3" },
    { id: 4, name: "Produit 4", price: 39.99, image: "https://via.placeholder.com/250?text=Produit+4" },
    { id: 5, name: "Produit 5", price: 59.99, image: "https://via.placeholder.com/250?text=Produit+5" },
    { id: 6, name: "Produit 6", price: 24.99, image: "https://via.placeholder.com/250?text=Produit+6" },
    { id: 7, name: "Produit 7", price: 34.99, image: "https://via.placeholder.com/250?text=Produit+7" },
    { id: 8, name: "Produit 8", price: 44.99, image: "https://via.placeholder.com/250?text=Produit+8" }
];

let cart = [];

function displayProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price.toFixed(2)} €</p>
            <button class="btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    toggleCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} x${item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)} € 
                <button onclick="removeFromCart(${item.id})" style="color: red; cursor: pointer; background: none; border: none;">×</button>
            </span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide');
        return;
    }
    alert('Redirection vers le paiement...');
    cart = [];
    updateCartDisplay();
    toggleCart();
}

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('active');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message) {
        const messagesContainer = document.getElementById('chat-messages');
        
        messagesContainer.innerHTML += `<p class="user-message">${message}</p>`;
        input.value = '';
        
        setTimeout(() => {
            messagesContainer.innerHTML += `<p class="bot-message">Merci pour votre message ! Un conseiller vous répondra sous peu.</p>`;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

document.getElementById('chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    e.target.reset();
});

document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre inscription à la newsletter !');
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
