import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//selcciona toodos los inputs 

inputs.forEach(input =>{
    input.addEventListener("blur", (input) =>{ //le va a agregar a cada uno esta función
        valida(input.target); //cuando salga de foco va a llamar a valida 
    })
})