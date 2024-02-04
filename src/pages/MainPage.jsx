import { NewTodo } from '../components/NewTodo/NewTodo';
import { TodoList } from '../components/TodoList/TodoList';
import { Filters } from '../components/Filters/Filters';

export const MainPage = () => {
  return (
    <>
      <NewTodo />
      <Filters />
      <TodoList />
    </>
  );
};
