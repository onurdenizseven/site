document.addEventListener('DOMContentLoaded', function() {
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            
            const currentPage = window.location.pathname;
            const menuLinks = document.querySelectorAll('.nav-links a');
            
            menuLinks.forEach(link => {
                if (currentPage === '/' && link.dataset.page === 'home') {
                    link.classList.add('active');
                } else if (currentPage.includes(link.dataset.page)) {
                    link.classList.add('active');
                }
            });

            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mobileNav = document.querySelector('.nav-links');
            
            mobileMenuBtn?.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
        })
        .catch(error => {
            console.error('Navigation bar yüklenirken hata oluştu:', error);
        });
}); 