document.addEventListener('DOMContentLoaded', function() {
    // Göreceli yol kullanıyoruz
    const footerPath = window.location.pathname === '/' ? 
        'components/footer.html' : 
        '../components/footer.html';

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => {
            console.error('Footer yüklenirken hata oluştu:', error);
        });
}); 