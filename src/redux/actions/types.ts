import { ActionTypes } from './todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface UpdateTodos {
  type: ActionTypes.UPDATE_TODOS;
  payload: Todo[];
}

export interface DeleteTodo {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

export type TodoActions = DeleteTodo | UpdateTodos;
