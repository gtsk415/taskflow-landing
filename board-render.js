
export { render };

const columns = document.querySelector('.column__wrapper');

function render(state) {
  const sections = columns.querySelectorAll('ul');
  function renderList(listEl, tasksArray) {
    for (const task of tasksArray) {
      const li = document.createElement('li');
      li.dataset.id = task.id;
      
      const span = document.createElement('span');
      span.textContent = task.text;
      
      const button = document.createElement('button');
      button.textContent = '×';
      
      li.appendChild(span);
      li.appendChild(button);
      
      listEl.appendChild(li);
    }
  }

  for (const list of sections) {
    list.innerHTML = '';
    if (list.className === 'todo__list') {
      renderList(list, state.todo);
    } else if (list.className === 'progress__list') {
      renderList(list, state.inProgress);
    } else if (list.className === 'done__list') {
      renderList(list, state.done);
    }
  }

  console.log('render called, state:', state);
}