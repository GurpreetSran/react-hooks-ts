import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, deleteTodo, TodoActions } from '../redux/actions';
import { RootState } from '../redux/reducers';

const App: FunctionComponent = () => {
  const dispath = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      <h1>Todos</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} onClick={() => dispath(deleteTodo(todo.id))}>
            {todo.title}
          </div>
        ))}
      </div>
      <button onClick={() => dispath({ type: ActionTypes.FETCH_TODOS })}>
        Get Todos
      </button>
    </>
  );
};

export default App;
