// Desafío para mostrar las tareas completadas dadas un array de objetos con el método filter()
let task = [];

task[0] = { nombre: "Tarea Vue", complete: true };
task[1] = { nombre: "Tarea Angular", complete: true };
task[2] = { nombre: "Tarea React", complete: false };
task[3] = { nombre: "Tarea NodeJS", complete: true };

const result = task.filter(checkTrue);

function checkTrue(task) {
    return task.complete === true;
};