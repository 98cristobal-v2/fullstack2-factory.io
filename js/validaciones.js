// ==========================================================
// VALIDACION DE REGISTRO (registro.html)
// ==========================================================

// Función que procesa y valida los datos ingresados en el formulario de registro
function validarRegistro() {
    // Obtiene y almacena los valores escritos en los campos del HTML según su 'id'
    var rut = document.getElementById("rut").value;
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;

    // 1. Validar RUT: Comprueba que el largo del texto esté entre 8 y 9 caracteres
    if (rut.length < 8 || rut.length > 9) {
        // Muestra el mensaje de error en el párrafo con id 'mensaje'
        document.getElementById("mensaje").textContent = "El RUT debe tener entre 8 y 9 caracteres.";
        // 'return' detiene la ejecución de la función para que no siga evaluando
        return;
    }

    // 2. Validar Correo Vacío: Verifica que la variable no esté en blanco
    if (correo == "") {
        document.getElementById("mensaje").textContent = "Ingresa tu correo electronico.";
        return;
    }

    // 3. Validar Dominios Permitidos (@gmail.com, @duoc.cl, @profesor.cl)
    // El método .endsWith() evalúa si el texto del correo termina con alguna de las extensiones indicadas
    if (correo.endsWith("@gmail.com") || correo.endsWith("@duoc.cl") || correo.endsWith("@profesor.cl")) {
        // Si cumple la condición de terminar en alguno de los 3 dominios, el código continúa
    } else {
        // Si no coincide con ninguno, notifica el error al usuario y detiene el proceso
        document.getElementById("mensaje").textContent = "El correo debe terminar en @gmail.com, @duoc.cl o @profesor.cl.";
        return;
    }

    // 4. Validar Clave: Comprueba que la contraseña tenga como mínimo 6 caracteres
    if (clave.length < 6) {
        document.getElementById("mensaje").textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    // Si todas las condiciones anteriores se cumplen de forma correcta, muestra el mensaje de éxito
    document.getElementById("mensaje").textContent = "¡Registro exitoso!";
    
    // Limpieza de inputs: Vacía los campos en pantalla asignándoles un texto en blanco
    document.getElementById("rut").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("clave").value = "";
}

// ==========================================================
// VALIDACION LOGIN (login.html)
// ==========================================================

// Función que valida el inicio de sesión del usuario
function validarLogin() {
    // Captura los valores de correo y contraseña desde el HTML
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;

    // Revisa si el correo está vacío o si NO incluye el carácter '@'
    if (correo == "" || !correo.includes("@")) {
        document.getElementById("mensaje").textContent = "Ingresa un correo valido con @.";
        return;
    // Si el correo está bien, revisa si la clave se dejó en blanco
    } else if (clave == "") {
        document.getElementById("mensaje").textContent = "Ingresa tu contraseña.";
        return;
    // Revisa que la clave tenga al menos 6 caracteres de extensión
    } else if (clave.length < 6) {
        document.getElementById("mensaje").textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    // Si no hay errores, se ejecuta este bloque
    } else {
        // Confirma el inicio de sesión en pantalla
        document.getElementById("mensaje").textContent = "¡Inicio de sesion correcto!";
        // Resetea las cajas de texto a blanco
        document.getElementById("correo").value = "";
        document.getElementById("clave").value = "";
    }
}

// ==========================================================
// VALIDACION DE CONTACTO (contacto.html)
// ==========================================================

// Función que valida los campos de la vista de soporte/contacto
function validarContacto() {
    // Lee los valores de los elementos 'nombre', 'correo' y 'texto-mensaje'
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("texto-mensaje").value;

    // Validar Nombre: .trim() elimina los espacios en blanco al inicio y al final
    if (nombre.trim() == "") {
        document.getElementById("mensaje").textContent = "Ingresa tu nombre.";
        return;
    }

    // Validar Correo: Verifica que no venga vacío y que contenga el signo '@'
    if (correo == "" || !correo.includes("@")) {
        document.getElementById("mensaje").textContent = "Ingresa tu correo con @.";
        return;
    }

    // Validar Mensaje: Comprueba que el área de texto no esté vacía
    if (mensaje == "") {
        document.getElementById("mensaje").textContent = "Escribe un mensaje antes de enviar.";
        return;
    }

    // Despliega el mensaje indicando que el formulario fue enviado correctamente
    document.getElementById("mensaje").textContent = "¡Mensaje enviado con exito!";
    
    // Limpieza de campos tras enviar la información
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("texto-mensaje").value = "";
}
// ==========================================================
// VALIDACION DE CARRITO (carrito.html)
// ==========================================================

// Función que confirma el pedido del usuario en la vista del carrito
function validarCarrito() {
    // Muestra la confirmación de la compra en el elemento con id 'mensaje'
    document.getElementById("mensaje").textContent = "¡Gracias por tu compra! Tu pedido esta en proceso.";
}