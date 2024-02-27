import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/readTasks.js";

const buttonData = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anónimas
buttonData.addEventListener('click', addTask);

displayTask();