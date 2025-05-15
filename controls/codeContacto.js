$('#btnPedir').click(function(e) {
    e.preventDefault();
    
    let isValid = true;
    let errorMessage = '';
    
    // Validamos cada uno de los campos manualment
    if ($('#nombre').val().trim() === '') { //que el nombre no sea ingresado vacio
        isValid = false;
        errorMessage = 'Por favor ingresa tu nombre completo';
    } else if ($('#email').val().trim() === '' || !isValidEmail($('#email').val())) { //Correo electronico sea correctamnte ingresado
        isValid = false;
        errorMessage = 'Por favor ingresa un correo electrónico válido';
    } else if ($('#tipoCafe').val() === null) { //que haya seleccionado un tipo de cafe
        isValid = false;
        errorMessage = 'Por favor selecciona un tipo de café';
    } else if ($('#cantTazas').val() < 1) { // la cantidad debe ser al menos 1
        isValid = false;
        errorMessage = 'La cantidad de tazas debe ser al menos 1';
    } else if (!$('input[name="tamaño"]:checked').val()) {
        isValid = false;
        errorMessage = 'Por favor selecciona un tamaño';
    }
    
    //
    if (isValid) {
        Swal.fire({
            title: "¡Pedido realizado!",
            text: "Tu pedido de café ha sido registrado correctamente",
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                //$('#pedidoForm').submit(); //cuando querramos enviar los datos al servidor
                baciarCampos();
            }
        });
    } else {
        Swal.fire({
            title: "Error",
            text: errorMessage || "Por favor completa todos los campos requeridos",
            icon: "error"
        });
    }
});

// Funcion para validar el Correo
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


//funcion para limpiar los campos
function baciarCampos(){
     $('#pedidoForm')[0].reset(); // Limpiar
}