document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.querySelector('.blog-grid');
    const pagination = document.querySelector('.pagination');
    const postsPerPage = 3;
    let currentPage = 1;

    // Örnek blog verileri
    const blogPosts = [
        {
            category: 'Kuantum Teknolojisi',
            image: '../assets/images/blog/quantum-computing.jpg',
            title: 'Kuantum Bilgisayarların Lojistik Sektörüne Etkileri',
            excerpt: 'Kuantum bilgisayarların rota optimizasyonunda sağladığı avantajlar...',
            date: '15 Mart 2024',
            readTime: '5 dk okuma'
        },
        {
            category: 'Lojistik',
            image: '../assets/images/blog/logistics-future.jpg',
            title: '2024\'te Lojistik Sektöründeki Teknolojik Gelişmeler',
            excerpt: 'Yapay zeka ve kuantum teknolojilerinin lojistik sektöründe yarattığı dönüşüm...',
            date: '10 Mart 2024',
            readTime: '4 dk okuma'
        },
        {
            category: 'Yapay Zeka',
            image: '../assets/images/blog/ai-logistics.jpg',
            title: 'Yapay Zeka ve Kuantum Bilgisayarların Sinerjisi',
            excerpt: 'Yapay zeka ve kuantum bilgisayarların birlikte kullanımının sağladığı faydalar...',
            date: '5 Mart 2024',
            readTime: '6 dk okuma'
        },
        // 4. Blog Yazısı
        {
            category: 'Kuantum Teknolojisi',
            image: '../assets/images/blog/quantum-future.jpg',
            title: 'Kuantum Teknolojisinin Geleceği',
            excerpt: 'Önümüzdeki 10 yılda kuantum teknolojisindeki beklenen gelişmeler...',
            date: '1 Mart 2024',
            readTime: '7 dk okuma'
        },
        // 5. Blog Yazısı
        {
            category: 'Lojistik',
            image: '../assets/images/blog/smart-logistics.jpg',
            title: 'Akıllı Lojistik Sistemleri',
            excerpt: 'IoT ve kuantum teknolojilerinin lojistik operasyonlarına entegrasyonu...',
            date: '28 Şubat 2024',
            readTime: '5 dk okuma'
        },
        // 6. Blog Yazısı
        {
            category: 'Yapay Zeka',
            image: '../assets/images/blog/ai-optimization.jpg',
            title: 'Yapay Zeka ile Rota Optimizasyonu',
            excerpt: 'Makine öğrenmesi algoritmalarının rota optimizasyonunda kullanımı...',
            date: '25 Şubat 2024',
            readTime: '4 dk okuma'
        }
    ];

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    function createPaginationButtons() {
        let buttons = '';
        
        // Önceki sayfa butonu
        buttons += `<a href="#" class="page-nav" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </a>`;

        // Sayfa numaraları
        for (let i = 1; i <= totalPages; i++) {
            // Her zaman ilk ve son sayfayı göster
            // Mevcut sayfanın etrafındaki 1 sayfayı göster
            if (
                i === 1 || 
                i === totalPages || 
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                buttons += `<a href="#" class="page-number ${currentPage === i ? 'active' : ''}" 
                    data-page="${i}">${i}</a>`;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                // Atlanan sayfalar için üç nokta
                buttons += `<span class="page-dots">...</span>`;
            }
        }

        // Sonraki sayfa butonu
        buttons += `<a href="#" class="page-nav" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </a>`;

        pagination.innerHTML = buttons;
    }

    function displayPosts() {
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        const currentPosts = blogPosts.slice(start, end);

        blogGrid.innerHTML = currentPosts.map(post => `
            <article class="blog-card animate-card">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-category">${post.category}</div>
                </div>
                <div class="blog-content">
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                        <span><i class="far fa-eye"></i> ${Math.floor(Math.random() * 1000) + 100} görüntülenme</span>
                    </div>
                    <a href="#" class="read-more">Devamını Oku <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `).join('');
    }

    // Sayfa değiştirme işlevi
    function changePage(newPage) {
        if (newPage >= 1 && newPage <= totalPages) {
            currentPage = newPage;
            displayPosts();
            createPaginationButtons();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Tıklama olaylarını dinle
    pagination.addEventListener('click', function(e) {
        e.preventDefault();
        const target = e.target.closest('a');
        
        if (!target) return;

        if (target.classList.contains('page-nav')) {
            if (target.querySelector('.fa-chevron-left')) {
                changePage(currentPage - 1);
            } else if (target.querySelector('.fa-chevron-right')) {
                changePage(currentPage + 1);
            }
        } else if (target.classList.contains('page-number')) {
            changePage(parseInt(target.dataset.page));
        }
    });

    // Kategori filtreleme
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentPage = 1;
            displayPosts();
            createPaginationButtons();
        });
    });

    // İlk yükleme
    displayPosts();
    createPaginationButtons();
}); 