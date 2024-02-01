import { removeTodo, toggleTodo } from '../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

export const TodoList = () => {
  const elements = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {elements.map((element) => (
        <li key={element.title}>
          <input type="checkbox" checked={element.completed} onChange={() => dispatch(toggleTodo(element.id))} />{' '}
          {element.title} <button onClick={() => dispatch(removeTodo(element.id))}>remove</button>
        </li>
      ))}
    </ul>
  );
};
