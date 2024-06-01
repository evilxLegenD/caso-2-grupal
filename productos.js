$(document).ready(function() {
    const apiEndpoint = 'https://api.example.com/products'; // Replace with a real API endpoint

    $.get(apiEndpoint, function(data) {
        let productList = $('#product-list');
        data.forEach(product => {
            productList.append(`
                <div class="product">
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `);
        });
    });

    $('#product-list').on('click', '.add-to-cart', function() {
        let productId = $(this).data('id');
        // Add product to cart logic
    });
});
