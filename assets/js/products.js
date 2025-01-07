async function loadProducts() {
    try {
        // Fetch the CSV file
        const response = await fetch('./assets/data/products.csv');
        const csvText = await response.text();
        
        // Parse CSV (skip header row)
        const products = csvText
            .split('\n')
            .slice(1)
            .filter(row => row.trim())
            .map(row => {
                const [id, title, description, image] = row.split(',');
                return { id, title, description, image };
            });

        // Get the container
        const container = document.getElementById('products-container');
        
        // Create product cards
        products.forEach(product => {
            const productCard = `
                <div class="product-card" data-product-id="${product.id}">
                    <div class="product-image">
                        <img src="./assets/images/${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                    </div>
                </div>
            `;
            container.innerHTML += productCard;
        });

    } catch (error) {
        console.error('Error loading products:', error);
        document.getElementById('products-container').innerHTML = 
            '<p class="error">Sorry, failed to load products. Please try again later.</p>';
    }
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', loadProducts); 