import { projectFactory } from './projects.js';


document.querySelector('.navbar-toggler').addEventListener('click', function()  {
    document.querySelector('.left-nav').classList.toggle('reveal');
})

// Switch arrow function
const switchArrow = () => {
    const arrow = document.getElementById('arrow');
    if (arrow.getAttribute('src') == "images/arrow-down.svg") {
        arrow.src = "images/arrow-up.svg";
    } else if (arrow.getAttribute('src') == "images/arrow-up.svg") {
        arrow.src = "images/arrow-down.svg";
    }
}


document.querySelector('.projects').addEventListener('click', function() {
    switchArrow();
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })