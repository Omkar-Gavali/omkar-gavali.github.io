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

// Load Lottie animation
lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets10.lottiefiles.com/packages/lf20_9x9z6z.json' // the path to the animation json
});