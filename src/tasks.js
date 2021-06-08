import * as storage from './storage';
import * as view from './view';
import { newID } from './projects';

const taskFactory = (title, description, dueDate, priority, project, ID) => {
    const ID = newID();
    return {title, description, dueDate, priority, project, ID};
}

// add task modal submit
