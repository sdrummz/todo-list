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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n// toggle navbar button on small screens \ndocument.querySelector('.navbar-toggler').addEventListener('click', function()  {\n    document.querySelector('.left-nav').classList.toggle('reveal');\n})\n\n// switch arrow direction on projects dropdown\ndocument.querySelector('.projects').addEventListener('click', function() {\n    ;(0,_view__WEBPACK_IMPORTED_MODULE_1__.switchArrow)();\n})\n\n\n// initialize view\n;(0,_view__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();\n\n// Switching selected category title\nconst catTitle = document.querySelector('.cat-title');\nconst taskGroupTitle = document.querySelectorAll('.task-group-title');\ntaskGroupTitle.forEach(el => {\n    el.addEventListener('click', function() {\n        if (el.classList.contains('inbox')) {\n            console.log('inbox');\n        } else if (el.classList.contains('today')) {\n            console.log('today')\n        } else if (el.classList.contains('this-week')) {\n            console.log('this week')\n        } else if (el.classList.contains('completed')) {\n            console.log('completed')\n        }\n    })\n})\n\n// bootstrap components initialize\n$(function () {\n    $('[data-toggle=\"tooltip\"]').tooltip({ trigger: 'hover'})\n})\n\n$(function () {\n    $('[data-toggle=\"popover\"]').popover({\n        html: true,\n        content: '<div class=\"btn-group-vertical\"><button type=\"button\" class=\"btn btn-secondary\">Low</button><button type=\"button\" class=\"btn btn-secondary\">Medium</button><button type=\"button\" class=\"btn btn-secondary\">High</button></div>'\n    })\n})\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\nconst projectFactory = (name) => {\n    let ID = newID();\n    return { name, ID };\n}\n// Add checkIDExists before assign\n\nconst newID = () => {\n    return '_' + Math.random().toString(36).substr(2, 9);\n}\n\n\n\n// add project modal submit\nconst inputProject = document.getElementById('inputProject');\nconst inputProjectBtn = document.querySelector('.inputProjectBtn');\ninputProjectBtn.addEventListener('click', function() {\n    if (inputProject.value != '') {\n        _storage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.push(projectFactory(inputProject.value))\n        $('#addProjectModal').modal('toggle')\n        inputProject.value = null;\n        _view__WEBPACK_IMPORTED_MODULE_1__.updateProjectList();\n    }\n})\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectStorage\": () => (/* binding */ projectStorage)\n/* harmony export */ });\nlet projectStorage = [ {name: 'Default', ID: '_yu6F3D'}];\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchArrow\": () => (/* binding */ switchArrow),\n/* harmony export */   \"updateProjectList\": () => (/* binding */ updateProjectList)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n// Switch arrow function switches arrow direction on projects dropdown\nconst switchArrow = () => {\n    const arrow = document.getElementById('arrow');\n    if (arrow.getAttribute('src') == \"images/arrow-down.svg\") {\n        arrow.src = \"images/arrow-up.svg\";\n    } else if (arrow.getAttribute('src') == \"images/arrow-up.svg\") {\n        arrow.src = \"images/arrow-down.svg\";\n    }\n}\n\n// Switching selected menu categories (default it today)\n\n\n\n// Adding new projects and tasks to UI\n\n//  update/add projects list\nconst updateProjectList = () => {\n    // parent node/list\n    const projectList = document.querySelector('.project-list');\n\n    // iterate over project items to delete\n    const projectItems = document.querySelectorAll('.project-item');\n    projectItems.forEach(function(item) {\n        item.remove();\n    })\n    // for each project object, add to view\n    _storage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.forEach(function(el) {\n        projectList.children[projectList.childElementCount - 1].insertAdjacentHTML(\"beforebegin\", `<li class=\"project-item\" data-project-ID=${el.ID}>${el.name}</li>`);\n    })\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/view.js?");

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