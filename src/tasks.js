import * as storage from './storage';
import * as view from './view';
import { newID } from './projects';


const taskFactory = (title, description, dueDate, priority, project, taskID, projectID) => {
    const ID = newID();
    return {title, description, dueDate, priority, project, taskID};
}

// add task modal submit

const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskProject = document.getElementById('taskProject');
const taskDueDate = document.getElementById('taskDueDate');
const taskPriority = document.getElementById('taskPriority');
const addTaskModal = new bootstrap.Modal(document.getElementById('addTaskModal'))
const taskForm = document.getElementById('taskForm');

const saveTaskBtn = document.querySelector('.saveTaskBtn');
saveTaskBtn.addEventListener('click', function() {
    console.log('empty')
})


export { taskFactory }

// const taskFormValidation = () => {
//     if (taskTitle.value === '') {
//         taskTitle.classList.add('is-invalid')
//     }
// }