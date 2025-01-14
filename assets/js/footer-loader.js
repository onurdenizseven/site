document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = getBaseUrl();
    
    fetch(`${baseUrl}/components/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });
}); 