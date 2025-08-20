particlesJS("particles-js", {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: ["#00e5ff", "#0077b6", "#80deea"]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0.2,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 0.5,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00b7eb",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 800,
                rotateY: 1600
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.6
                }
            },
            push: {
                particles_nb: 3
            }
        }
    },
    retina_detect: true
});
