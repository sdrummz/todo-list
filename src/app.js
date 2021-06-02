import { projectFactory } from './projects';
import { switchArrow, updateProjectList } from './view'
import * as storage from './storage'

// toggle navbar button on small screens 
document.querySelector('.navbar-toggler').addEventListener('click', function()  {
    document.querySelector('.left-nav').classList.toggle('reveal');
})

// switch arrow direction on projects dropdown
document.querySelector('.projects').addEventListener('click', function() {
    switchArrow();
})


// initialize view
updateProjectList();

// Switching selected category title
const catTitle = document.querySelector('.cat-title');
const taskGroupTitle = document.querySelectorAll('.task-group-title');
taskGroupTitle.forEach(el => {
    el.addEventListener('click', function() {
        if (el.classList.contains('inbox')) {
            console.log('inbox');
        } else if (el.classList.contains('today')) {
            console.log('today')
        } else if (el.classList.contains('this-week')) {
            console.log('this week')
        } else if (el.classList.contains('completed')) {
            console.log('completed')
        }
    })
})

// bootstrap components initialize
$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover'})
})

$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        content: '<div class="btn-group-vertical"><button type="button" class="btn btn-secondary">Low</button><button type="button" class="btn btn-secondary">Medium</button><button type="button" class="btn btn-secondary">High</button></div>'
    })
})