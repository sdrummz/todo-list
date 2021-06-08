import * as storage from './storage';
import * as view from './view';
import { newID } from './projects';

const taskFactory = (title, description, dueDate, priority, project, taskID, projectID) => {
    const ID = newID();
    return {title, description, dueDate, priority, project, taskID};
}

// add task modal submit
