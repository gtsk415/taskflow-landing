"use strict"

const btn = document.querySelector('.main__button');
const textInput = document.getElementById('text');
const toDoList = document.querySelector('.todo__list') ;


btn.addEventListener('click', () => {
  const text = textInput.value.trim();

  if (!text) {
    console.log('empty input');
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'x'

  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);

  textInput.value = '';
});