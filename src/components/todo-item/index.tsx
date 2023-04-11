import useTodoStore, { ITodoItem } from '../../store';

type TProps = {
	todoItem: ITodoItem;
  todoId: number;
};

const TodoItem = ({ todoItem, todoId }: TProps) => {
	const todoStore = useTodoStore();

	return (
		<div className='border p-4 rounded-xl flex justify-between sm:flex-row flex-col sm:space-y-0 space-y-4'>
			<div className='flex flex-col'>
				<h2 className='font-bold text-xl'>{todoItem.title}</h2>
				<p>{todoItem.description}</p>
			</div>
			<div className='space-x-2'>
        <button className='btn btn-primary' onClick={() => todoStore.removeTodo(todoId)}>Edit</button>
        <button className='btn btn-danger' onClick={() => todoStore.removeTodo(todoId)}>Delete</button>
      </div>
		</div>
	);
};

export default TodoItem;
