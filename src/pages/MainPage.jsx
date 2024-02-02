import { NewTodo } from '../components/NewTodo/NewTodo';
import { TodoList } from '../components/TodoList/TodoList';

export const MainPage = () => {
  return (
    <>
      <NewTodo />
      <TodoList />
    </>
  );
};
