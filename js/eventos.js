
let optionPrioridad = document.querySelector('#buscarPrioridad');
let inputTarea = document.querySelector('#buscarTarea');

btnbotonGuardar.addEventListener('click', controlTarea);

function controlTarea(event) {

    let control = 0; // me permite continuar en el guardado
    let nombreTarea = tarea.value;
    let prioridadTarea = prioridad.value;


    if (nombreTarea == "") {
        alert("Por favor introduzca texto.");
    } else if (nombreTarea.length < 5) {
        alert("Por favor, complete más su tarea.");
    } else {
        if (prioridadTarea == 0) {
            alert("Por favor, debe seleccionar una prioridad.");
        } else {
            // El control es correcto
            control = 1;
        }
    }
    if (control == 1) {
        // guardo mi tarea 
        guardarTarea(idContador, nombreTarea, prioridadTarea);

        // Pintar mi tarea en index.html
        pintarTarea(idContador, nombreTarea, stylePrioridad(prioridadTarea));

        // Incrementar el id de mi array
        idContador++;

        //vacio los campos
        tarea.value = "";
        prioridad.value = "";

        console.log("Hurra!!! Conseguido!!");

    }

}

function stylePrioridad(pPrioridad) {
    let estilo;

    switch (pPrioridad) {
        case "urgente":
            estilo = "red";
            break;

        case "diaria":
            estilo = "blue";
            break;
        case "semanal":
            estilo = "green";
            break;
        case "mensual":
            estilo = "yellow";
            break;
    }

    return estilo;
}

optionPrioridad.addEventListener('change', buscarXprioridad);

function buscarXprioridad(event) {

    let option = optionPrioridad.value;

    if (option != "Prioridad de la tarea") {

        divContainer.innerHTML = "";

        listaTareas.forEach(function (pTarea) {
            if (pTarea.prioridad == option) {
                // función pintar tarea
                pintarTarea(pTarea.id, pTarea.tarea, stylePrioridad(pTarea.prioridad));
            }

        });

        // vacio el campo
        inputTarea.value = "";
    }

}

inputTarea.addEventListener('change', buscarXtarea);

function buscarXtarea(event) {

    let nombre = inputTarea.value;

    if (nombre != "") {

        divContainer.innerHTML = "";

        listaTareas.forEach(function (pTarea) {
            if (pTarea.nombre == nombre) {
                // función pintar tarea
                pintarTarea(pTarea.id, pTarea.tarea, stylePrioridad(pTarea.prioridad));
            }

        });

        // vacio el campo
        optionPrioridad.value = "";
    }

}

