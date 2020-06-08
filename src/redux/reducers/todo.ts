import { ActionTypes, Todo, TodoActions } from '../actions';

export const todoReducer = (state: Todo[] = [], action: TodoActions) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
