// Инициализация частиц
document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        particles: {
            number: { 
                value: 100, 
                density: { 
                    enable: true, 
                    value_area: 800 
                } 
            },
            color: { 
                value: "#d10000" 
            },
            shape: { 
                type: "circle" 
            },
            opacity: { 
                value: 0.5, 
                random: true 
            },
            size: { 
                value: 3, 
                random: true 
            },
            line_linked: { 
                enable: true, 
                distance: 150, 
                color: "#d10000", 
                opacity: 0.4, 
                width: 1 
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { 
                    enable: true, 
                    mode: "repulse" 
                },
                onclick: { 
                    enable: true, 
                    mode: "push" 
                }
            }
        }
    });

    // Переключение разделов
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активные классы
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active-section'));
            
            // Добавляем активные классы
            this.classList.add('active');
            const targetSection = document.getElementById(this.dataset.target);
            targetSection.classList.add('active-section');
        });
    });
});
