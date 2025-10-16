document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DE ENTRADA Y SALIDA DEL PORTFOLIO ---
    const botonEntrar = document.getElementById('entrar-casa');
    const botonSalir = document.getElementById('salir-portfolio');
    const body = document.body;

    botonEntrar.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.add('portfolio-visible');
    });

    botonSalir.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.remove('portfolio-visible');
    });
});

document.getElementById('toggleLightButton').addEventListener('click', function() {
    const lamp = document.querySelector('.lamp');
    const light = document.querySelector('.light');
    const ventana = document.querySelector('.ventana');
    const ventanaslep = document.querySelector('.cat-slep');
    const button = document.getElementById('toggleLightButton');

    // Cambiar la opacidad de la luz
    light.style.opacity = light.style.opacity === '0' ? '0.8' : '0';

    // Cambiar el icono, el fondo del cuerpo y el estado del botón
    if (light.style.opacity === '0') {
        // lightIcon.classList.replace('bi-lightbulb', 'bi-lightbulb-off');
        button.classList.remove('light-on');
        //body.style.background = '#0f1018'; 
        lamp.style.boxShadow = 'none';
        lamp.style.animation = 'none';

        ventana.style.background = '#242424';
        ventana.style.animation = 'none';

        ventanaslep.style.display = 'block';
    } else {
        // lightIcon.classList.replace('bi-lightbulb-off', 'bi-lightbulb');
        button.classList.add('light-on');
        //body.style.background = 'linear-gradient(to bottom, #1a1c28 0%, #12131c 50%, #0b0c11 100%)'; // Fondo cuando la luz está encendida
        lamp.style.boxShadow = '0px 0px 10px rgba(255, 255, 0, 0.8)';
        lamp.style.animation = 'swing 2s infinite ease-in-out';

        ventana.style.background = 'var(--highlight-color)';
        ventana.style.animation = 'brillar 4s infinite alternate';

        ventanaslep.style.display = 'none';
    }
});