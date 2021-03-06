import * as storage from './storage';
import * as view from './view';

const projectFactory = (name) => {
  const projectID = newID();
  return { name, projectID };
};
// Add checkIDExists before assign

const newID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

// add project modal submit
const inputProject = document.getElementById('inputProject');
const inputProjectBtn = document.querySelector('.inputProjectBtn');
const addProjectModal = new bootstrap.Modal(document.getElementById('addProjectModal'));
inputProjectBtn.addEventListener('click', function () {
  if (inputProject.value != '' && !storage.projectStorage.some((e) => e.name === inputProject.value)) {
    inputProject.classList.remove('is-invalid');
    storage.projectStorage.push(projectFactory(inputProject.value));
    addProjectModal.toggle();
    inputProject.value = null;
    view.updateProjectList();
  } else if (inputProject.value === '') {
    inputProject.classList.toggle('is-invalid');
  }
});

export { projectFactory, newID };
