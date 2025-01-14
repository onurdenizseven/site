// Base URL'i belirleyen yardımcı fonksiyon
const getBaseUrl = () => {
    // GitHub Pages için repository adını al
    const repoName = window.location.pathname.split('/')[1];
    return window.location.hostname === 'localhost' ? '' : `/${repoName}`;
}; 