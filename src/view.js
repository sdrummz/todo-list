import { projectStorage } from './storage';

// Switch arrow function switches arrow direction on projects dropdown
const switchArrow = () => {
    const arrow = document.getElementById('arrow');
    if (arrow.getAttribute('src') == "images/arrow-down.svg") {
        arrow.src = "images/arrow-up.svg";
    } else if (arrow.getAttribute('src') == "images/arrow-up.svg") {
        arrow.src = "images/arrow-down.svg";
    }
}

// Switching selected menu categories (default it today)



// Adding new projects and tasks to UI

//  update/add projects list
const updateProjectList = () => {
    // parent node/list
    const projectList = document.querySelector('.project-list');

    // iterate over project items to delete
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(function(item) {
        item.remove();
    })
    // for each project object, add to view
    projectStorage.forEach(function(el) {
        projectList.children[projectList.childElementCount - 1].insertAdjacentHTML("beforebegin", `<li class="project-item" data-project-ID=${el.ID}>${el.name}</li>`);
    })
}



export { switchArrow, updateProjectList };