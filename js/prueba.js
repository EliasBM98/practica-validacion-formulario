const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (event) {
    console.log(event)
    let valido = true;
    const nombre = formulario.elements["nombre"];
    const email = formulario.elements["email"];
    const edad = formulario.elements["edad"];

    if (nombre.value.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert("Por favor, ingresa un email válido.");
      valido = false;
    }

    if (edad.value < 18) {
      alert("Debes tener al menos 18 años.");
      valido = false;
    }

    if (!valido) {
      event.preventDefault(); // Previene el envío si hay errores
    }
  
  });

