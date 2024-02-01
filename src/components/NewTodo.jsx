import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/actions';

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="add" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
