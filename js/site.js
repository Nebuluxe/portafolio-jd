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
    const ventana = document.querySelectorAll('.ventana');

    const humoContenedor = document.querySelector('.humo-contenedor');
    const ventanaslep = document.querySelectorAll('.cat-slep');
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

        ventana[0].style.background = '#0e0e33';
        ventana[0].style.animation = 'none';

        ventana[1].style.background = '#0e0e33';
        ventana[1].style.animation = 'none';

        ventana[2].style.background = '#0e0e33';
        ventana[2].style.animation = 'none';

        ventanaslep[0].style.display = 'block';
        ventanaslep[1].style.display = 'block';

        humoContenedor.style.display = 'none';

    } else {
        // lightIcon.classList.replace('bi-lightbulb-off', 'bi-lightbulb');
        button.classList.add('light-on');
        //body.style.background = 'linear-gradient(to bottom, #1a1c28 0%, #12131c 50%, #0b0c11 100%)'; // Fondo cuando la luz está encendida
        lamp.style.boxShadow = '0px 0px 10px rgba(255, 255, 0, 0.8)';
        lamp.style.animation = 'swing 2s infinite ease-in-out';

        ventana[0].style.background = 'var(--highlight-color)';
        ventana[0].style.animation = 'brillar 4s infinite alternate';

        ventana[1].style.background = 'var(--highlight-color)';
        ventana[1].style.animation = 'brillar 4s infinite alternate';

        ventana[2].style.background = 'var(--highlight-color)';
        ventana[2].style.animation = 'brillar 4s infinite alternate';

        ventanaslep[0].style.display = 'none';
        ventanaslep[1].style.display = 'none';

        humoContenedor.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener el elemento iframe por su ID
    const iframeElement = document.getElementById('arcade-section');

    if (!iframeElement) {
        console.error("Error: El elemento con ID 'arcade-section' no se encontró.");
        return;
    }

    // La función que se ejecutará cada vez que el contenido del iframe cargue
    const handleIframeLoad = () => {
        try {
            // 2. Acceder al objeto Document dentro del iframe
            const iframeDocument = iframeElement.contentDocument;

            if (iframeDocument) {
                // 3. Agregar un listener de 'click' al documento del iframe (delegación de eventos)
                iframeDocument.addEventListener('click', function(event) {
                    // Buscar el elemento <a> más cercano al objetivo del click
                    const targetLink = event.target.closest('a');

                    if (targetLink) {
                        event.preventDefault(); // Detiene la navegación dentro del iframe

                        const href = targetLink.href;
                        // Comprobar si el atributo 'download' está presente
                        const downloadAttr = targetLink.getAttribute('download');
                        
                        if (downloadAttr !== null && downloadAttr !== false) {
                            // Si es un enlace de descarga, forzar la descarga en la ventana principal
                            const downloadLink = document.createElement('a');
                            downloadLink.href = href;
                            downloadLink.download = downloadAttr; // Usar el valor de 'download' o un nombre vacío
                            
                            // Simular el click para iniciar la descarga
                            document.body.appendChild(downloadLink);
                            downloadLink.click();
                            document.body.removeChild(downloadLink);

                        } else if (href) { 
                            // Si es un enlace normal, abrir en una nueva pestaña
                            window.open(href, '_blank');
                        }
                    }
                });
            }
        } catch (e) {
            // Este error ocurre si el contenido del iframe no es del mismo dominio
            console.warn("No se pudo acceder al contenido del iframe (Same-Origin Policy).", e);
        }
    };

    // 4. Adjuntar el manejador de eventos 'load' al iframe.
    // Esto asegura que la lógica se aplique cada vez que el iframe recarga su contenido.
    iframeElement.addEventListener('load', handleIframeLoad);
    
    // Opcional: Ejecutar la función inmediatamente si el iframe ya está cargado (útil para caché)
    if (iframeElement.contentDocument && iframeElement.contentDocument.readyState === 'complete') {
        handleIframeLoad();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos del DOM
    const boton = document.getElementById('toggleDiaNoche');
    const cielo = document.querySelector('.cielo');

    // 2. Asegurarse de que el cielo inicie con la clase 'noche' (si no está ya en tu CSS)
    // Esto es opcional, si tu CSS base ya define el estilo de noche, puedes omitirlo.
    if (!cielo.classList.contains('dia') && !cielo.classList.contains('noche')) {
        cielo.classList.add('noche');
    }

    // 3. Definir la función de cambio
    function toggleDiaNoche() {
        // Verifica si actualmente tiene la clase 'dia'
        if (cielo.classList.contains('dia')) {
            // Si es de día, cambiamos a noche
            cielo.classList.remove('dia');
            cielo.classList.add('noche');
        } else {
            // Si es de noche, cambiamos a día
            cielo.classList.remove('noche');
            cielo.classList.add('dia');
        }
    }

    // 4. Asignar el evento al botón
    if (boton) {
        boton.addEventListener('click', toggleDiaNoche);
    }
});