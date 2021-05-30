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