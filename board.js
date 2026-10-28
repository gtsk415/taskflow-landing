"use strict"


import { state, addTask, moveTask, deleteTask, createTask } from './board-state.js';
import { render } from './board-render.js';

import { setRender } from './board-state.js';

setRender(render);

const btn = document.querySelector('.main__button');
const textInput = document.getElementById('text');
const taskColumn = document.querySelector('.column__wrapper');



btn.addEventListener('click', () => {
  const text = textInput.value.trim();
  console.log('work');

  if (!text) {
    console.log('empty input');
    return;
  }

  addTask(text);

  textInput.value = '';
});

taskColumn.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  const id = Number(li.getAttribute('data-id'));

  if (e.target.tagName === 'BUTTON') {
    deleteTask(id);
  } else  {
    moveTask(id);
  }
});

render(state);

