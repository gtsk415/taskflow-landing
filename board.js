"use strict"

const btn = document.querySelector('.main__button');
const textInput = document.getElementById('text');
const toDoList = document.querySelector('.todo__list');
const taskColumn = document.querySelector('.column__wrapper');


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

taskColumn.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.tagName === 'BUTTON') {
    li.remove();
  } else {
    const currentUl = li.closest('ul');
    const currentSection = currentUl.closest('section');
    const nextSection = currentSection.nextElementSibling;

    if (nextSection) {
      const nextUl = nextSection.querySelector('ul');
      nextUl.appendChild(li);
    } else {
      li.remote();
    }
  }
})

