
function confiReloj() {
    const now = new Date();

    // Formatear hora
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const segundo = now.getSeconds().toString().padStart(2, 0);
    document.getElementById('clock-text').textContent = `${hours}:${minutes}:${segundo}`;

    // Formatear fecha (ejemplo: "Lun 25 Dic")
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        // Para mostrar en español:
        // month: 'long' (mostraría "diciembre")
    };
    const dateString = now.toLocaleDateString('es-ES', options);
    document.getElementById('date-text').textContent = dateString;
}

setInterval(confiReloj, 1000);
confiReloj(); // Ejecutar inmediatamente


$('#btnSuscribirse').click(function(e) {
    e.preventDefault();

    let isValid = true;
    let errorMessage = '';

    // Obtenemos el valor del input de suscripción (usa la clase correcta de tu HTML)
    const email = $('.newsletter-input').val().trim();

    // Validación del correo
    if (email === '') {
        isValid = false;
        errorMessage = 'Por favor ingresa tu correo electrónico';
    } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage = 'Por favor ingresa un correo electrónico válido';
    }

    if (isValid) {
        Swal.fire({
            title: "¡Suscripción exitosa!",
            text: `Te has suscrito con: ${email}`,
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                limpiarCampoSuscripcion(); // Limpiamos el campo
                // Aquí podrías agregar AJAX para enviar el email al servidor
                // enviarEmailAlServidor(email);
            }
        });
    } else {
        Swal.fire({
            title: "Error",
            text: errorMessage,
            icon: "error"
        });
    }
});

// Funcion para validar el Correo
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}