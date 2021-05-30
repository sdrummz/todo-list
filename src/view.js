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



// Adding new projects and tasks to UI

//  update/add projects list
const updateProjectList = () => {
    const projectList = document.querySelector('.project-list');
    // update only the most recently added object

    // iterate over project items to delete
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(function(item) {
        item.remove();
    })

    projectStorage.forEach(function(el) {
        projectList.children[projectList.childElementCount - 1].insertAdjacentHTML("beforebegin", `<li class="project-item" data-project-ID=${el.ID}>${el.name}</li>`);
        // projectList.insertBefore(`<li class="project-item" data-project-ID=${el.ID}>${el.name}</li>`, projectList.children[projectList.childElementCount]);
    })
}



export { switchArrow, updateProjectList };