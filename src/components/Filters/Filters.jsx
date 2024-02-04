import { useFilters } from './hook';
import { setFilter } from '../../store/filters/filters_actions';

export const Filters = () => {
  const { activeFilter, dispatch } = useFilters();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))} style={{ color: activeFilter === 'all' ? 'red' : 'black' }}>
        all
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
      >
        active
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        style={{ color: activeFilter === 'completed' ? 'red' : 'black' }}
      >
        completed
      </button>
    </div>
  );
};
