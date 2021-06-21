import { projectStorage } from './storage';

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

  const projectChoices = document.querySelectorAll('.project-choice');
  projectChoices.forEach((e) => {
    e.remove();
  });

  //   update project list within the add new task modal
  const taskProject = document.getElementById('taskProject');
  projectStorage.forEach((el) => {
    taskProject.insertAdjacentHTML('beforeend', `<option class="project-choice" value=${el.name}>${el.name}</option>`);
  });
};

export { switchArrow, updateProjectList, taskGroupTitle };
