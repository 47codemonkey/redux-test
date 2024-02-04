import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../../store/filters/filters_selectors';

export const useFilters = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const dispatch = useDispatch();

  return { activeFilter, dispatch };
};
