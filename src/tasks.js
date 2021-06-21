import * as storage from './storage';
import * as view from './view';
import { newID } from './projects';

const taskFactory = (title, description, project, dueDate, priority, projectID) => {
  const taskID = newID();
  return { title, description, project, dueDate, priority, taskID, projectID };
};

const addTaskModal = new bootstrap.Modal(document.getElementById('addTaskModal'));

// saves add task modal submit for new task, logic for submit btn event listener
const saveNewTask = () => {
  // dom elements
  const taskTitle = document.getElementById('taskTitle');
  const taskDescription = document.getElementById('taskDescription');
  const taskProject = document.getElementById('taskProject');
  const taskDueDate = document.getElementById('taskDueDate');
  const taskPriority = document.getElementById('taskPriority');
  const taskForm = document.getElementById('taskForm');

  //   submit logic
  taskForm.classList.add('was-validated');
  if (taskTitle.checkValidity() && taskProject.checkValidity() && taskDueDate.checkValidity() && taskPriority.checkValidity()) {
    storage.taskStorage.push(
      taskFactory(
        taskTitle.value,
        taskDescription.value,
        taskProject.value,
        taskDueDate.value,
        taskPriority.value,
        retrieveProjectID(taskProject.value)
      )
    );
    addTaskModal.toggle();
    taskForm.classList.remove('was-validated');
    taskTitle.value = null;
    taskDescription.value = null;
    taskProject.value = null;
    taskDueDate.value = null;
    taskPriority.value = null;
  }
};

// returns the project ID of the project selected, so tasks can be later grouped by projectID
const retrieveProjectID = (taskProject) => {
  return storage.projectStorage.find((e) => e.name === taskProject).projectID;
};

const saveTaskBtn = document.querySelector('.saveTaskBtn');
saveTaskBtn.addEventListener('click', saveNewTask);

export { taskFactory };
