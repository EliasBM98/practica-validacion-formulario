//Validacion de formulario

/*Pseudocodigo
    capturar el formulario 

    capturar inputs del formulario que quiero comprobar (los requeridos: nombre apellidos edad correo y telefono)

    capturar evento submit y prevenirlo para verificar antes de enviar 

    iniciar bucle if por cada input del formulario 
        si no cumple con la condicion 
            solicitar dato de nuevo

    si todos los elementos del elemento cumplen su condicion
        submit
    fin bucle
*/




/*---------------VARIABLES---------------*/

//Capturo formulario 
const formulario = document.getElementById("formularioDeregistro")


//Capturo elementos del formulario 
const nombre = formulario.nombre.value;
const apellidos = formulario.apellidos.value;
const edad = formulario.edad.value;
const email = formulario.email.value;
const telefono = formulario.telefono.value;

//REGEX para validar 
const regExp ={
    nombre:/^[a-z]{3,}$/gi,
    apellidos:/^([a-z]{3,}\s[a-z]{3,})$/gi,
    edad:/[0-9]/gi,
    email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/gi,
    telefono: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/gi,
}

//objeto para validar
    const objValido={
        nombre: false,
        apellidos: false,
        edad: false,
        email: false,
        telefono: false,
    }




/*---------------EVENTOS---------------*/
formulario.addEventListener("submit", (ev)=>{
    ev.preventDefault()
    validarFormulario()


    //nombre
    if (regExp.nombre.test (nombre)){
        alert("EY! El nombre debe tener al menos 3 caracteres")
        objValido.nombre = false;
    } else {
        objValido.nombre = true;
    }
    

    //apellidos
   if (regExp.apellidos.test (apellidos)){
        alert ("EY! Debes introducir dos apellidos separados con un espacio")
        objValido.apellidos = false;
    } else {
        objValido.apellidos = true;
    }


    //edad
    if (edad.value < 18){
        alert("EY! Necesitas ser mayor de edad");
        objValido.edad = false;
    } else if (regExp.edad.test (edad)){
        alert("EY! Debes introducir tu edad");
        objValido.edad = false;
    } else {
        objValido.edad = true;
    }


    //email
    if (regExp.email.test (email)){
        alert("EY! Introduce una dirección de correo valida");
        objValido.email = false;
    } else {
        objValido.email = true;
    }
    
    //telefono
        if (regExp.telefono.test (telefono.value)){
            alert("EY! Introduce un numero de telefono valido");
            objValido.telefono = false;
        } else {
            objValido.telefono = true;
        }

    if(!objValido) {ev.preventDefault()};

})



/*---------------FUNCIONES---------------*/
const validarFormulario=()=>{

    if (nombre == '') {
        errores += `<li>Debes escribir tu nombre</li>`
        formulario.nombre.style.background = 'red';
    }

    if (apellido == '') {
        errores += '<li>Debes escribir tu primer apellido</li>'
        formulario.apellido.style.background = 'red';
    }
    if (email == '') {
        errores += '<li>Debes escribir un email</li>'
        formulario.email.style.background = 'red';
    }

    if (errores != '') {
        mensaje.innerHTML = errores
    } else {
        formulario.submit()
    }




const objValoresvalidados=Object.values(objValido);

const valido = objValoresvalidados.includes(false);
console.log(valido)

//Validar y enviar formulario
    if (!valido) {
       console.log ('no pasa validacion')
      } else{
        console.log ('pasa validacion')
      }

}
/*---------------INVOCACIONES---------------*/

