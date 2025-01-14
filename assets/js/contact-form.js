document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // API'ye gönder (örnek)
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Mesajınız başarıyla gönderildi!');
        this.reset();
    })
    .catch(error => {
        alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    });
}); 