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
