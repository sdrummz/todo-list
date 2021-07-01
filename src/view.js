import { projectStorage, taskStorage } from './storage';

// Switch arrow function switches arrow direction on projects dropdown
const switchArrow = () => {
  const arrow = document.getElementById('arrow');
  if (arrow.getAttribute('src') == 'images/arrow-down.svg') {
    arrow.src = 'images/arrow-up.svg';
  } else if (arrow.getAttribute('src') == 'images/arrow-up.svg') {
    arrow.src = 'images/arrow-down.svg';
  }
};

// Switching selected menu categories (default it today)
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

  //   for add task modal, update project list within projects dropdown. first remove all to prevent duplicates
  const projectChoices = document.querySelectorAll('.project-choice');
  projectChoices.forEach((e) => {
    e.remove();
  });

  const taskProject = document.getElementById('taskProject');
  projectStorage.forEach((el) => {
    taskProject.insertAdjacentHTML('beforeend', `<option class="project-choice" value=${el.name}>${el.name}</option>`);
  });
};

// initialize tasklist, add logic for grouping tasks by ID into appropriate folders/projects
const updateTaskList = () => {
  const taskList = document.querySelector('.task-list');

  taskStorage.forEach((el) => {
    taskList.children[taskList.childElementCount - 1].insertAdjacentHTML(
      'beforebegin',
      `<li class="list-group-item task-item" data-task-ID="${el.taskID}">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="taskCheck" />
      <label class="form-check-label">${el.title}</label>
    </div>
    <div class="task-actions">
      <span data-bs-toggle="modal" data-bs-target="#editTaskModal">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit task">
          <img src="images/pencil.svg" width="20" alt="" />
        </button>
      </span>
      <span data-container="body" data-bs-toggle="popover" data-bs-placement="left">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Priority">
          <img src="images/low-flag.svg" width="20" alt="" />
        </button>
      </span>
      <span data-bs-toggle="modal" data-bs-target="#deleteTaskModal">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete task">
          <img src="images/delete.svg" width="20" alt="" />
        </button>
      </span>
    </div>
  </li>`
    );
  });
};

// add new task when submitting modal, adds appropriate event listeners to actions
const insertNewTask = () => {
  const taskList = document.querySelector('.task-list');
  let newTask = taskStorage[taskStorage.length - 1];
  taskList.children[taskList.childElementCount - 1].insertAdjacentHTML(
    'beforebegin',
    `<li class="list-group-item task-item" data-task-ID="${newTask.taskID}">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="taskCheck" />
      <label class="form-check-label">${newTask.title}</label>
    </div>
    <div class="task-actions">
      <span data-bs-toggle="modal" data-bs-target="#editTaskModal">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit task">
          <img src="images/pencil.svg" width="20" alt="" />
        </button>
      </span>
      <span data-container="body" data-bs-toggle="popover" data-bs-placement="left">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Priority">
          <img src="images/low-flag.svg" width="20" alt="" />
        </button>
      </span>
      <span data-bs-toggle="modal" data-bs-target="#deleteTaskModal">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete task">
          <img src="images/delete.svg" width="20" alt="" />
        </button>
      </span>
    </div>
  </li>`
  );
};

export { switchArrow, updateProjectList, updateTaskList, insertNewTask, taskGroupTitle };
