import { projectStorage, taskStorage } from './storage';
import { deleteTask, editTaskValues, saveEditTaskValues } from './tasks';

// Switch arrow function switches arrow direction on projects dropdown
const switchArrow = () => {
  const arrow = document.getElementById('arrow');
  if (arrow.getAttribute('src') == 'images/arrow-down.svg') {
    arrow.src = 'images/arrow-up.svg';
  } else if (arrow.getAttribute('src') == 'images/arrow-up.svg') {
    arrow.src = 'images/arrow-down.svg';
  }
};

// Switching selected menu categories (default is today)
const taskGroupTitle = (taskGroup) => {
  let title = document.querySelector('.task-group-title');
  title.textContent = taskGroup;
};

// Adding new projects and tasks to UI

//  update/add projects list
const updateProjectList = () => {
  // parent node/list on project dropdown in nav
  const projectList = document.querySelector('.project-list');

  // iterate over project items to delete
  const projectItems = document.querySelectorAll('.project-title');
  projectItems.forEach((e) => {
    e.remove();
  });
  // for each project object, add to view under project dropdown in nav
  projectStorage.forEach((el) => {
    projectList.children[projectList.childElementCount - 1].insertAdjacentHTML(
      'beforebegin',
      `<li class="project-title" data-project-ID=${el.projectID}>${el.name}</li>`
    );
  });
  // add event listeners to the project btns
  let projectBtns = document.querySelectorAll('.project-title');
  projectBtns.forEach((el) => {
    el.addEventListener('click', function () {
      taskGroupTitle(`${el.textContent}`);
    });
  });

  //   for add/edit task modal, update project list within projects dropdown. first remove all to prevent duplicates
  const projectChoices = document.querySelectorAll('.project-choice');
  projectChoices.forEach((e) => {
    e.remove();
  });

  const taskProject = document.getElementById('taskProject');
  const editTaskProject = document.getElementById('editTaskProject');
  projectStorage.forEach((el) => {
    taskProject.insertAdjacentHTML('beforeend', `<option class="project-choice" value=${el.name}>${el.name}</option>`);
    editTaskProject.insertAdjacentHTML('beforeend', `<option class="project-choice" value=${el.name}>${el.name}</option>`);
  });
};

// create instance of delete task modal to be used in insertNewTask, as well as editTask Modal
var deleteTaskModal = new bootstrap.Modal(document.getElementById('deleteTaskModal'));
var editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'));

// initialize/update tasklist view when submitting add new task modal
const updateTaskList = () => {
  //   check if task already exists in DOM, if not then add new task with insertNewTask function
  taskStorage.forEach((task) => {
    if (document.querySelector(`[data-task-ID=${task.taskID}]`) == null) {
      insertNewTask(task);
    }
  });
};

// add new task when submitting modal, adds appropriate event listeners to actions
const insertNewTask = (task) => {
  const taskList = document.querySelector('.task-list');
  taskList.children[taskList.childElementCount - 1].insertAdjacentHTML(
    'beforebegin',
    `<li class="list-group-item task-item" data-task-ID=${task.taskID}>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="taskCheck" />
            <label class="form-check-label">${task.title}</label>
        </div>
        <div class="task-actions">
            <span>
                <button type="button" class="btn btn-secondary editBtn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit task">
                    <img src="images/pencil.svg" width="20" alt="" />
                </button>
            </span>
            <span data-container="body" class="popoverBtn" data-bs-toggle="popover" data-bs-placement="left">
                <button type="button" class="btn btn-secondary priorityBtn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Priority">
                    <img src="images/low-flag.svg" width="20" alt="" />
                </button>
            </span>
            <span>
                <button type="button" class="btn btn-secondary deleteBtn">
                    <img src="images/delete.svg" width="20" alt="" />
                </button>
            </span>
        </div>
    </li>`
  );

  // event listeners for task buttons

  // edit task click event logic
  document.querySelector(`[data-task-ID=${task.taskID}] .editBtn`).addEventListener('click', function () {
    // open modal, populate form with values
    editTaskModal.toggle();
    editTaskValues(task);

    // logic for save task btn/event listener
    const editTaskSave = () => {
      modalEditTaskSave.removeEventListener('click', editTaskSave);
      saveEditTaskValues(task.taskID);
      document.querySelector(`[data-task-ID=${task.taskID}] .form-check-label`).textContent = task.title;
      editTaskModal.toggle();
    };

    // add event listener to save same or new values in form
    const modalEditTaskSave = document.querySelector('.modalEditTaskSave');
    modalEditTaskSave.addEventListener('click', editTaskSave);

    // prevent multiple event listeners bug being added on edit task modal close
    document.querySelector('.modalEditTaskClose').addEventListener('click', function handler(e) {
      e.currentTarget.removeEventListener('click', handler);
      modalEditTaskSave.removeEventListener('click', editTaskSave);
    });
  });

  // change priority button event listeners and logic
  document.querySelector(`[data-task-ID=${task.taskID}] .priorityBtn`).addEventListener('click', function () {
    console.log('priority btn');
  });

  // delete button click event logic
  document.querySelector(`[data-task-ID=${task.taskID}] .deleteBtn`).addEventListener('click', function () {
    // open delete btn modal
    deleteTaskModal.toggle();
    const modalDeleteTaskSubmit = document.querySelector('.modalDeleteTaskSubmit');
    // function to delete task
    const deleteSubmit = () => {
      modalDeleteTaskSubmit.removeEventListener('click', deleteSubmit);
      deleteTask(task.taskID);
      deleteTaskModal.toggle();
    };
    modalDeleteTaskSubmit.addEventListener('click', modalDeleteSubmit);
    // prevent multiple event listeners being added to delete modal submit btn when clicking close instead of submit
    document.querySelector('.modalDeleteTaskClose').addEventListener('click', function handler(e) {
      e.currentTarget.removeEventListener('click', handler);
      modalDeleteTaskSubmit.removeEventListener('click', modalDeleteSubmit);
    });
  });
};

export { switchArrow, updateProjectList, updateTaskList, taskGroupTitle };
