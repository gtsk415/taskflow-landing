"use strict"

const btn = document.querySelector('.main__button');
const textInput = document.getElementById('text');
const toDoList = document.querySelector('.todo__list') ;


btn.addEventListener('click', () => {
  if(textInput.value) {
    toDoList.innerHTML = `<li>${textInput.value}</li>`;
  } else {
    console.log('empty input');
  }
});