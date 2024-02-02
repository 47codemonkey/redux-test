import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/elements/elements_actions';

export const useNewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return { handleSubmit };
};
