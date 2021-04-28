const projectFactory = (name) => {
    let ID = newID();
    return { name, ID };
}

const newID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export { projectFactory };