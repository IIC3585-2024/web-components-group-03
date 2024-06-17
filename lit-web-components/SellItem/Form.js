document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const originalPrice = document.getElementById('product-originalPrice').value;
    const stars = document.getElementById('product-stars').value;
    const image = document.getElementById('product-image').value;

    const newProduct = document.createElement('sell-item');
    newProduct.setAttribute('name', name);
    newProduct.setAttribute('description', description);
    newProduct.setAttribute('price', price);
    newProduct.setAttribute('originalPrice', originalPrice);
    newProduct.setAttribute('stars', stars);
    if (image) {
        newProduct.setAttribute('image', image);
    }

    document.querySelector('.items').appendChild(newProduct);
    
    document.getElementById('add-product-form').reset();
});