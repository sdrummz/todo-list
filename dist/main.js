/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n// toggle navbar button on small screens \ndocument.querySelector('.navbar-toggler').addEventListener('click', function()  {\n    document.querySelector('.left-nav').classList.toggle('reveal');\n})\n\n// switch arrow direction on projects dropdown\ndocument.querySelector('.projects').addEventListener('click', function() {\n    ;(0,_view__WEBPACK_IMPORTED_MODULE_2__.switchArrow)();\n})\n\n// Switching selected category title\nconst taskGroupBtns = document.querySelectorAll('.task-group-btn');\ntaskGroupBtns.forEach(el => {\n    el.addEventListener('click', function() {\n        (0,_view__WEBPACK_IMPORTED_MODULE_2__.taskGroupTitle)(`${el.textContent}`);\n    })\n})\n\n\n\n// initialize view\n;(0,_view__WEBPACK_IMPORTED_MODULE_2__.updateProjectList)();\n\n\n\n// bootstrap components initialize\n\nvar tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'))\nvar tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {\n  return new bootstrap.Tooltip(tooltipTriggerEl)\n})\n\nvar popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"popover\"]'))\nvar popoverList = popoverTriggerList.map(function (popoverTriggerEl) {\n  return new bootstrap.Popover(popoverTriggerEl, {\n    sanitize: false,\n    html: true,\n    content: '<div class=\"btn-group-vertical\"><button type=\"button\" class=\"btn btn-secondary\">Low</button><button type=\"button\" class=\"btn btn-secondary\">Medium</button><button type=\"button\" class=\"btn btn-secondary\">High</button></div>',\n  })\n})\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"newID\": () => (/* binding */ newID)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\nconst projectFactory = (name) => {\n  const projectID = newID();\n  return { name, projectID };\n};\n// Add checkIDExists before assign\n\nconst newID = () => {\n  return '_' + Math.random().toString(36).substr(2, 9);\n};\n\n// add project modal submit\nconst inputProject = document.getElementById('inputProject');\nconst inputProjectBtn = document.querySelector('.inputProjectBtn');\nconst addProjectModal = new bootstrap.Modal(document.getElementById('addProjectModal'));\ninputProjectBtn.addEventListener('click', function () {\n  if (inputProject.value != '' && !_storage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.some((e) => e.name === inputProject.value)) {\n    inputProject.classList.remove('is-invalid');\n    _storage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.push(projectFactory(inputProject.value));\n    addProjectModal.toggle();\n    inputProject.value = null;\n    _view__WEBPACK_IMPORTED_MODULE_1__.updateProjectList();\n  } else if (inputProject.value === '') {\n    inputProject.classList.toggle('is-invalid');\n  }\n});\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectStorage\": () => (/* binding */ projectStorage),\n/* harmony export */   \"taskStorage\": () => (/* binding */ taskStorage)\n/* harmony export */ });\nlet projectStorage = [ {name: 'Default', projectID: '_yu6b45iw6'}];\nlet taskStorage = [];\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\nconst taskFactory = (title, description, project, dueDate, priority, projectID) => {\n  const taskID = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.newID)();\n  return { title, description, project, dueDate, priority, taskID, projectID };\n};\n\nconst addTaskModal = new bootstrap.Modal(document.getElementById('addTaskModal'));\n\n// saves add task modal submit for new task, logic for submit btn event listener\nconst saveNewTask = () => {\n  // dom elements\n  const taskTitle = document.getElementById('taskTitle');\n  const taskDescription = document.getElementById('taskDescription');\n  const taskProject = document.getElementById('taskProject');\n  const taskDueDate = document.getElementById('taskDueDate');\n  const taskPriority = document.getElementById('taskPriority');\n  const taskForm = document.getElementById('taskForm');\n\n  //   submit logic\n  taskForm.classList.add('was-validated');\n  if (taskTitle.checkValidity() && taskProject.checkValidity() && taskDueDate.checkValidity() && taskPriority.checkValidity()) {\n    _storage__WEBPACK_IMPORTED_MODULE_0__.taskStorage.push(\n      taskFactory(\n        taskTitle.value,\n        taskDescription.value,\n        taskProject.value,\n        taskDueDate.value,\n        taskPriority.value,\n        retrieveProjectID(taskProject.value)\n      )\n    );\n    addTaskModal.toggle();\n    taskForm.classList.remove('was-validated');\n    taskTitle.value = null;\n    taskDescription.value = null;\n    taskProject.value = null;\n    taskDueDate.value = null;\n    taskPriority.value = null;\n  }\n};\n\n// returns the project ID of the project selected, so tasks can be later grouped by projectID\nconst retrieveProjectID = (taskProject) => {\n  return _storage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.find((e) => e.name === taskProject).projectID;\n};\n\nconst saveTaskBtn = document.querySelector('.saveTaskBtn');\nsaveTaskBtn.addEventListener('click', saveNewTask);\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchArrow\": () => (/* binding */ switchArrow),\n/* harmony export */   \"updateProjectList\": () => (/* binding */ updateProjectList),\n/* harmony export */   \"taskGroupTitle\": () => (/* binding */ taskGroupTitle)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n// Switch arrow function switches arrow direction on projects dropdown\nconst switchArrow = () => {\n  const arrow = document.getElementById('arrow');\n  if (arrow.getAttribute('src') == 'images/arrow-down.svg') {\n    arrow.src = 'images/arrow-up.svg';\n  } else if (arrow.getAttribute('src') == 'images/arrow-up.svg') {\n    arrow.src = 'images/arrow-down.svg';\n  }\n};\n\n// Switching selected menu categories (default it today)\nconst taskGroupTitle = (taskGroup) => {\n  let title = document.querySelector('.task-group-title');\n  title.textContent = taskGroup;\n};\n\n// Adding new projects and tasks to UI\n\n//  update/add projects list\nconst updateProjectList = () => {\n  // parent node/list on project dropdown in nav\n  const projectList = document.querySelector('.project-list');\n\n  // iterate over project items to delete\n  const projectItems = document.querySelectorAll('.project-title');\n  projectItems.forEach((e) => {\n    e.remove();\n  });\n  // for each project object, add to view under project dropdown in nav\n  _storage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.forEach((el) => {\n    projectList.children[projectList.childElementCount - 1].insertAdjacentHTML(\n      'beforebegin',\n      `<li class=\"project-title\" data-project-ID=${el.projectID}>${el.name}</li>`\n    );\n  });\n  // add event listeners to the project btns\n  let projectBtns = document.querySelectorAll('.project-title');\n  projectBtns.forEach((el) => {\n    el.addEventListener('click', function () {\n      taskGroupTitle(`${el.textContent}`);\n    });\n  });\n\n  const projectChoices = document.querySelectorAll('.project-choice');\n  projectChoices.forEach((e) => {\n    e.remove();\n  });\n\n  //   update project list within the add new task modal\n  const taskProject = document.getElementById('taskProject');\n  _storage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.forEach((el) => {\n    taskProject.insertAdjacentHTML('beforeend', `<option class=\"project-choice\" value=${el.name}>${el.name}</option>`);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;