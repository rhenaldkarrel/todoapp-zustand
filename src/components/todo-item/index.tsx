import React from 'react';
import useTodoStore, { ITodo } from '../../store';
import Modal from '../modal';
import { Input } from '../forms/input';
import clsx from 'clsx';

type TProps = {
	todo: ITodo;
};

const TodoItem = ({ todo }: TProps) => {
	const [isEditingTask, setIsEditingTask] = React.useState(false);
	const todoStore = useTodoStore();

	function openEditTodoModal(todoId: number) {
		setIsEditingTask(true);
		const toBeUpdatedTodo = todoStore.todos.find((todo) => todo.id === todoId)!;

		todoStore.setToBeUpdatedTodo({
			title: toBeUpdatedTodo.todo.title,
			description: toBeUpdatedTodo.todo.description,
		});
	}

	function updateTodo(todoId: number) {
		todoStore.updateTodo(todoId);
		setIsEditingTask(false);
	}

	return (
		<React.Fragment>
			<div className='border p-4 rounded-xl flex justify-between sm:flex-row flex-col sm:space-y-0 space-y-4 items-center'>
				<div className='mr-4'>
					<input
						type='checkbox'
						title='Mark as done'
						checked={todo.isDone}
						onChange={() => todoStore.markAsDone(todo.id)}
					/>
				</div>
				<div className={clsx(
          'flex flex-col grow',
          todo.isDone && 'line-through'
        )}>
					<h2 className='font-bold text-xl'>{todo.todo.title}</h2>
					<p>{todo.todo.description}</p>
				</div>
				<div className='space-x-2'>
					<button
						className={clsx(
              'btn btn-primary',
              todo.isDone && 'hidden'
            )}
						onClick={() => openEditTodoModal(todo.id)}
					>
						Edit
					</button>
					<button
						className='btn btn-danger'
						onClick={() => todoStore.removeTodo(todo.id)}
					>
						Delete
					</button>
				</div>
			</div>
			<Modal
				actionButtonText='Update'
				closeModal={setIsEditingTask}
				openModal={isEditingTask}
				coreModalEvent={() => updateTodo(todo.id)}
				title='Edit Task'
			>
				<div className='space-y-4 mt-4'>
					<Input
						placeholder='Task Title'
						value={todoStore.toBeUpdatedTodo.title}
						onChange={(e) =>
							todoStore.setToBeUpdatedTodo({
								...todoStore.toBeUpdatedTodo,
								title: e.target.value,
							})
						}
					/>
					<Input
						placeholder='Task Description'
						value={todoStore.toBeUpdatedTodo.description}
						onChange={(e) =>
							todoStore.setToBeUpdatedTodo({
								...todoStore.toBeUpdatedTodo,
								description: e.target.value,
							})
						}
					/>
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default TodoItem;
