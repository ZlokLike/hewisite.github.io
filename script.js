document.addEventListener('DOMContentLoaded', function() {
    // Инициализация частиц с улучшенными параметрами
    particlesJS("particles-js", {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 1000 } },
            color: { value: "#d10000" },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 4, random: true },
            line_linked: { 
                enable: true, 
                distance: 180, 
                color: "#d10000", 
                opacity: 0.4, 
                width: 1.5 
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                out_mode: "out",
                attract: { enable: false }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 6 }
            }
        },
        retina_detect: true
    });

    // Мобильное меню
    if (window.innerWidth <= 768) {
        const header = document.querySelector('header');
        header.insertAdjacentHTML('afterbegin', '<div class="mobile-menu-btn">☰</div>');
        const btn = document.querySelector('.mobile-menu-btn');
        const cheatsList = document.querySelector('.cheats-list');
        
        btn.addEventListener('click', function() {
            cheatsList.classList.toggle('mobile-show');
        });
    }

    // Плавный скролл для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация при загрузке
    setTimeout(() => {
        document.querySelector('.logo').style.opacity = 1;
        document.querySelector('.tagline').style.opacity = 1;
    }, 100);
});
