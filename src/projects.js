import * as storage from './storage';

const projectFactory = (name) => {
    let ID = newID();
    return { name, ID };
}

const newID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}



// add project modal submit
const inputProject = document.getElementById('inputProject');
const inputProjectBtn = document.querySelector('.inputProjectBtn');
inputProjectBtn.addEventListener('click', function() {
    if (inputProject.value != '') {
        storage.projectStorage.push(projectFactory(inputProject.value))
        $('#addProjectModal').modal('toggle')
        inputProject.value = null;
    }
})


export { projectFactory };