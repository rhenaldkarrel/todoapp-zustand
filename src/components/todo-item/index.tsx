import useTodoStore, { ITodoItem } from '../../store';

type TProps = {
	todoItem: ITodoItem;
  todoId: number;
};

const TodoItem = ({ todoItem, todoId }: TProps) => {
	const todoStore = useTodoStore();

	return (
		<div className='border p-4 rounded-xl flex justify-between'>
			<div className='flex flex-col'>
				<h2 className='font-bold text-xl'>{todoItem.title}</h2>
				<p>{todoItem.description}</p>
			</div>
			<button className='btn btn-danger' onClick={() => todoStore.removeTodo(todoId)}>Delete</button>
		</div>
	);
};

export default TodoItem;
