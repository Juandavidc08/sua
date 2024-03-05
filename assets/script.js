function showProductDetails(name, price, additionalInfo) {
    // Set the title and price in the modal
    document.getElementById('productModalLabel').textContent = name;
    document.querySelector('.modal-price').textContent = price;
    
    // Set the additional info in the modal body
    document.querySelector('.modal-additional-info').textContent = additionalInfo;

    // Show the modal
    $('#productModal').modal('show');
}