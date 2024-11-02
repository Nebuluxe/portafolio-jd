document.getElementById('toggleLightButton').addEventListener('click', function() {
    const light = document.querySelector('.light');
    const lightIcon = document.getElementById('lightIcon');
    const buttonText = document.getElementById('buttonText');
    const button = document.getElementById('toggleLightButton');

    // Cambiar la opacidad de la luz
    light.style.opacity = light.style.opacity === '0' ? '0.8' : '0';

    // Cambiar el icono y el texto del botón
    if (light.style.opacity === '0') {
        lightIcon.classList.replace('bi-lightbulb', 'bi-lightbulb-off');
        button.classList.remove('light-on');
    } else {
        lightIcon.classList.replace('bi-lightbulb-off', 'bi-lightbulb');
        button.classList.add('light-on');
    }
});
document.getElementById("toggleContactForm").addEventListener("click", function () {
    var contactForm = document.getElementById("contact-form");
    if (contactForm.style.display === "none" || contactForm.style.display === "") {
        contactForm.style.display = "block";
    } else {
        contactForm.style.display = "none";
    }
});
