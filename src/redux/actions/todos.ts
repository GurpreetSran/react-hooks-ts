import { Todo } from './types';

export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  UPDATE_TODOS = 'UPDATE_TODOS',
  DELETE_TODO = 'DELETE_TODO',
}

export const updateTodos = (Todos: Todo[]) => ({
  type: ActionTypes.UPDATE_TODOS,
  payload: Todos,
});

export const deleteTodo = (id: number) => ({
  type: ActionTypes.DELETE_TODO,
  payload: id,
});
