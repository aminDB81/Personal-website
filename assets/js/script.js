// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Hide the preloader after a specific time (e.g., 3 seconds)
    const preloader = document.getElementById('preloader-section');
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 4000);
    
});
