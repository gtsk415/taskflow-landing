export { createTask, addTask, moveTask, deleteTask};

export const state = {
  todo: [],
  inProgress: [],
  done: []
}

let nextId = 1;

export function setRender(fn) {
  renderFn = fn;
}

let renderFn = () => {};

function createTask(text) {
  const newTask = { id: nextId, text: text };
  nextId++;
  return newTask;
}

function addTask(text) {
  const task = createTask(text); 
  state.todo.push(task);
  renderFn(state);
}

function moveTask(id) {


  for (let key in state) {
    const taskIndex = state[key].findIndex(task => task.id === id);

    console.log('key:', key, 'taskIndex:', taskIndex);

    if (taskIndex !== -1) {
      const transferTask = state[key].splice(taskIndex, 1)[0];

      if (key === 'todo' ) {
      state['inProgress'].push(transferTask);
      } else if (key === 'inProgress' ) {
      state['done'].push(transferTask);
     } 
     renderFn(state);
     console.log('render called, state:', state);
     return;
    }
  }
  
}

function deleteTask(id) {
    for (let key in state) {
    const taskIndex = state[key].findIndex(task => task.id === id);

    
    if (taskIndex !== -1) {
      state[key].splice(taskIndex, 1)[0];
      renderFn(state);
      return;
    }
  }

}
