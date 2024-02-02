import { useSelector, useDispatch } from 'react-redux';
import { allElements } from '../../store/elements/elements_selectors';

export const useTodoList = () => {
  const elements = useSelector(allElements);
  const dispatch = useDispatch();

  return { elements, dispatch };
};
