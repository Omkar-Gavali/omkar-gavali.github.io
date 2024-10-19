particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('particles.js loaded - callback');
  });

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});

