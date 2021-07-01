import { projectFactory } from './projects';
import { taskFactory } from './tasks';
import { switchArrow, updateProjectList, updateTaskList, taskGroupTitle } from './view';
import * as storage from './storage';

// toggle navbar button on small screens
document.querySelector('.navbar-toggler').addEventListener('click', function () {
  document.querySelector('.left-nav').classList.toggle('reveal');
});

// switch arrow direction on projects dropdown
document.querySelector('.projects').addEventListener('click', function () {
  switchArrow();
});

// Switching selected category title
const taskGroupBtns = document.querySelectorAll('.task-group-btn');
taskGroupBtns.forEach((el) => {
  el.addEventListener('click', function () {
    taskGroupTitle(`${el.textContent}`);
  });
});

// initialize view
updateProjectList();
updateTaskList();

// bootstrap components initialize

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    sanitize: false,
    html: true,
    content:
      '<div class="btn-group-vertical"><button type="button" class="btn btn-secondary">Low</button><button type="button" class="btn btn-secondary">Medium</button><button type="button" class="btn btn-secondary">High</button></div>',
  });
});
