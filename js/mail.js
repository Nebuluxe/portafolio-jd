// Incluir la biblioteca EmailJS
(function() {
    emailjs.init("_55ELI7JCRMZIN8ek"); // Reemplaza "_55ELI7JCRMZIN8ek" con tu user_id (Public Key)
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios. Por favor, completa todos los campos.',
            confirmButtonText: 'Aceptar'
        });
        return; 
    }

    Swal.fire({
        icon: 'success',
        title: '¡Estamos en contacto!',
        text: 'Tu mensaje ha sido enviado exitosamente.',
        confirmButtonText: 'Aceptar'
    });

    document.getElementById('contact-form').reset();

    // emailjs.sendForm(serviceID, templateID, this)
    //     .then((response) => {
    //         console.log('SUCCESS!', response.status, response.text);
    //         Swal.fire({
    //             icon: 'success',
    //             title: '¡Estamos en contacto!',
    //             text: 'Tu mensaje ha sido enviado exitosamente.',
    //             confirmButtonText: 'Aceptar'
    //         });

    //         document.getElementById('contact-form').reset();
    //     }, (error) => {
    //         console.log('FAILED...', error);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Error',
    //             text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente.',
    //             confirmButtonText: 'Aceptar'
    //         });
    //     });
});