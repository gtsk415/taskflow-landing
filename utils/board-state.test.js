import { test, expect } from '@jest/globals';
import { state, addTask, moveTask, deleteTask } from '../board-state.js';

beforeEach(() => {
  state.todo = [];
  state.inProgress = [];
  state.done = [];
});

test('fn addTask push task in todo', () => {

  addTask('buy milk');

  expect(state.todo.length).toBe(1);
  expect(state.todo[0].text).toBe('buy milk');

});

test('fn moveTask push task from todo to next', () => {

  addTask('buy milk');
  const id = state.todo[0].id;
  moveTask(id);

  expect(state.todo.length).toBe(0);
  expect(state.inProgress.length).toBe(1);
  expect(state.inProgress[0].text).toBe('buy milk');

});

test('fn moveTask push task from inProgress to done', () => {

  addTask('buy milk');
  const id = state.todo[0].id;
  moveTask(id);
  moveTask(id);

  expect(state.inProgress.length).toBe(0);
  expect(state.done.length).toBe(1);

});

test('fn moveTask delete task fron done', () => {

  addTask('buy milk');
  const id = state.todo[0].id;
  moveTask(id);
  moveTask(id);
  moveTask(id);

  expect(state.done.length).toBe(0);
});

test('fn deleteTask task in arr', () => {

  addTask('buy milk');
  expect(state.todo.length).toBe(1);


  const id = state.todo[0].id;
  deleteTask(id);

  
  expect(state.todo.length).toBe(0);

});