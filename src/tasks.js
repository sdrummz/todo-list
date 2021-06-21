import * as storage from './storage';
import * as view from './view';
import { newID } from './projects';


const taskFactory = (title, description, project, dueDate, priority, projectID) => {
    const taskID = newID();
    return {title, description, project, dueDate, priority, taskID, projectID};
}

// add task modal submit

const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskProject = document.getElementById('taskProject');
const taskDueDate = document.getElementById('taskDueDate');
const taskPriority = document.getElementById('taskPriority');
const addTaskModal = new bootstrap.Modal(document.getElementById('addTaskModal'))
const taskForm = document.getElementById('taskForm');

const saveNewTask = () => {
    taskForm.classList.add('was-validated');
    if  (taskTitle.checkValidity() && taskProject.checkValidity() && taskDueDate.checkValidity() && taskPriority.checkValidity()) {
        storage.taskStorage.push(taskFactory(taskTitle.value, taskDescription.value, taskProject.value, taskDueDate.value, taskPriority.value))
    }
    console.log(storage.taskStorage);
}

const retrieveProjectID = (taskProject) => {
    
}

const saveTaskBtn = document.querySelector('.saveTaskBtn');
saveTaskBtn.addEventListener('click', saveNewTask);


export { taskFactory }