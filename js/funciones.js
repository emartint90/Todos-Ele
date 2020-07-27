let tarea = document.querySelector("#tarea");
let prioridad = document.querySelector("#prioridad");
let btnbotonGuardar = document.querySelector("#guardar");
let idContador = 1;

let divContainer = document.querySelector("#contenedor");

function guardarTarea(pIdContador, pNombreTarea, pPrioridadTarea) {
    event.preventDefault();

    listaTareas.push(
        {
            id: pIdContador,
            tarea: pNombreTarea,
            prioridad: pPrioridadTarea,
        }
    );
    //añado al array por ultima posicion una nueva tarea
    // listaTareas.push(nuevaTarea);



}


//function pintarTarea(pTarea) {
function pintarTarea(pIdContador, pNombreTarea, pPrioridadTarea) {
    divContainer.innerHTML += `<div class="pintarTarea ${pPrioridadTarea}" id="tarea_${pIdContador}">
            <div class="tarea">
                <h2> ${pNombreTarea}</h2>
            </div>
            <div class="eliminar">
                <a href="#" onclick="borrarTarea('tarea_${pIdContador}')" class="btn btn-danger">Eliminar</a>
            </div>
        </div>`;
}

function borrarTarea(pIdTarea) {

    let divTarea = document.querySelector("#" + pIdTarea);
    divContainer.removeChild(divTarea);

    let id = parseInt(pIdTarea.substring(6));

    let posicionBorrar = listaTareas.findIndex(tarea => tarea.id == id);

    listaTareas.splice(posicionBorrar, 1);

}