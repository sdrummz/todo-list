import { projectFactory } from './projects';
import { switchArrow, updateProjectList, taskGroupTitle } from './view'
import * as storage from './storage'

// toggle navbar button on small screens 
document.querySelector('.navbar-toggler').addEventListener('click', function()  {
    document.querySelector('.left-nav').classList.toggle('reveal');
})

// switch arrow direction on projects dropdown
document.querySelector('.projects').addEventListener('click', function() {
    switchArrow();
})

// Switching selected category title
const taskGroupBtns = document.querySelectorAll('.task-group-btn');
taskGroupBtns.forEach(el => {
    el.addEventListener('click', function() {
        if (el.classList.contains('inbox')) {
            taskGroupTitle('Inbox')
        } else if (el.classList.contains('today')) {
            taskGroupTitle('Today')
        } else if (el.classList.contains('this-week')) {
            taskGroupTitle('This week')
        } else if (el.classList.contains('completed')) {
            taskGroupTitle('Completed')
        }
    })
})

// initialize view
updateProjectList();



// bootstrap components initialize

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    sanitize: false,
    html: true,
    content: '<div class="btn-group-vertical"><button type="button" class="btn btn-secondary">Low</button><button type="button" class="btn btn-secondary">Medium</button><button type="button" class="btn btn-secondary">High</button></div>',
  })
})