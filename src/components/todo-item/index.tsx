import { ITodoItem } from "../../store";

type TProps = {
  todoItem: ITodoItem;
};

const TodoItem = ({ todoItem }: TProps) => {
	return (
		<div className='border p-4 rounded-xl flex justify-between'>
			<div className='flex flex-col'>
				<h2 className='font-bold text-xl'>{todoItem.title}</h2>
				<p>{todoItem.description}</p>
			</div>
			<button className='btn btn-danger'>Delete</button>
		</div>
	);
};

export default TodoItem;
