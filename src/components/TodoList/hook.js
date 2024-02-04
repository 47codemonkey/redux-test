import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleElements } from '../../store/elements/elements_selectors';
import { selectActiveFilter } from '../../store/filters/filters_selectors';

export const useTodoList = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const elements = useSelector((state) => selectVisibleElements(state, activeFilter));

  const dispatch = useDispatch();

  return { elements, dispatch };
};
