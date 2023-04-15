document.addEventListener('DOMContentLoaded', function () {
    const contentWrapper = document.querySelector('.content-wrapper');
  
    window.addEventListener('mousemove', function (event) {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;
      let offsetX = (mouseX - centerX) * 0.01;
      let offsetY = (mouseY - centerY) * 0.01;
      contentWrapper.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
  