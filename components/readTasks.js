import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";


export const displayTask = () => {
    const list = document.querySelector("[data-list]");

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);
    const order = orderDates(dates);

    dates.forEach((date) => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const differentDate = dateMoment.diff(taskDate);
            if (differentDate === 0) {
                list.appendChild(createTask(task));
            }
        });
    })


};