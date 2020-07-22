let tarea = document.querySelector("#tarea");
let prioridad = document.querySelector("#prioridad");
let btnbotonGuardar = document.querySelector("#guardar");



btnbotonGuardar.addEventListener('click', guardarTarea);

function guardarTarea(event) {

    let control = 0; // me permite continuar en el guardado

    if (tarea.value == "") {
        console.log("Por favor introduzca texto.");
    } else if (tarea.value.length < 5) {
        console.log("Por favor, debe de introducir un texto de al menos 5 caracteres.");
    } else {
        if (prioridad.value == 0) {
            console.log("Por favor, debe seleccionar una tarea.");
        } else {
            control = 1;

        }

    }



    if (control == 1) {
        // guardo mi tarea y lo que quiera
        console.log("Hurra!!!");
    }

}