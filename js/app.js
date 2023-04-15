particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 400,
        },
      },
      color: {
        value: "#3a00ff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2,
          color: "#3a00ff",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
);


// Here i want to make onhover repulse effect working when you are hovering through content  
// Get the .content-wrapper element
const contentWrapper = document.querySelector('.content-wrapper');

// Add a mousemove event listener
contentWrapper.addEventListener('mousemove', (event) => {
  // Get the cursor coordinates relative to the window
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Call the particles.js mousemove event handler
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.interactivity.el.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: mouseX,
        clientY: mouseY,
      })
    );
  }
});
