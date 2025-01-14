class QuantumEffect {
    constructor() {
        this.canvas = document.getElementById('quantum-effect');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createParticles() {
        // Parçacık animasyonu için gerekli kod
    }

    animate() {
        // Animasyon döngüsü
        requestAnimationFrame(() => this.animate());
    }
}

new QuantumEffect(); 