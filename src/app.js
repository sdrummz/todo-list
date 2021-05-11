import { projectFactory } from './projects.js';

document.querySelector('.navbar-toggler').addEventListener('click', function()  {
    document.querySelector('.left-nav').classList.toggle('reveal');
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })