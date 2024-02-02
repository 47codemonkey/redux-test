import { removeTodo, toggleTodo } from '../../store/elements/elements_actions';
import { useTodoList } from './hook';

export const TodoList = () => {
  const { elements, dispatch } = useTodoList();

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
