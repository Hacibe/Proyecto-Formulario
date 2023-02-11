export function valida(input){
    const tipoDeInput = input.dataset.tipo; //esto es la colección de todos los datos  y el .tipo es para uno en específico pude llamarse data-otra o así e ir cambiando el nombre 
    if (validadores[tipoDeInput]){ //este es para verificar que si el tipo de data es el mismo al que se busca se ponga en el que deberia de ir 
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
      } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
          mostrarMensajeDeError(tipoDeInput, input);
      }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

const mensajesDeError = {
    nombre:{
        valueMissing: "Este campo no puede estar vacío",
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "Este correo no es válido",
    },
    password:{
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Al menos 8 caracteres con números y mayuscula",
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customErroR: "Debes de tener +18",
    },
    numero: {
        valueMissing: "Este campo requiere tu número",
        patternMismatch: "El formato requerido es de 10 digitos",
    },
    direccion:{
        valueMissing: "Este campo requiere tu número",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres"
    },
    ciudad:{
        valueMissing: "Este campo requiere tu número",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },
    estado:{
        valueMissing: "Este campo requiere tu número",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres"
    },

}

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarNacimiento(input){
    const fechaCliente = new Date (input.value);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)) {
        mensaje = "Debes de tener +18";
    };
    input.setCustomValidity(mensaje);
};

function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() +18, fecha.getUTCMonth(), fecha.getUTCDate())
    return(diferenciaFechas <= fechaActual);
};