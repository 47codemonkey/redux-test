import { useNewTodo } from './hook';

export const NewTodo = () => {
  const { handleSubmit } = useNewTodo();

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="add" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
