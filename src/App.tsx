import React from 'react';
import Modal from './components/modal';
import { Input } from './components/forms/input';
import useTodoStore from './store';
import TodoItem from './components/todo-item';

function App() {
	const [isAddNewTask, setIsAddNewTask] = React.useState<boolean>(false);

	const todoStore = useTodoStore();
  const isTodoExists = todoStore.todos.length > 0;

	function openModal() {
		setIsAddNewTask(true);
	}

  function addTodo() {
    todoStore.addTodo();
    setIsAddNewTask(false);
  }

	return (
		<main className='max-w-lg mx-auto border h-screen'>
			<div className='p-4 space-y-4'>
				<h1 className='text-xl sm:text-3xl font-bold'>My Todo List</h1>
        <div className='todos space-y-4'>
					{isTodoExists ? todoStore.todos.map((todo) => (
						<TodoItem
              key={todo.id}
              todoId={todo.id}
              todoItem={todo.todo}
            />
					)) : <p className='text-gray-500 text-center'>All done! Create new todo to manage your day.</p>}
				</div>
				<button className='btn btn-primary w-full' onClick={openModal}>
					Add New Task
				</button>
				<Modal
					title='Add New Task'
					actionButtonText='Save'
					openModal={isAddNewTask}
					closeModal={setIsAddNewTask}
					coreModalEvent={addTodo}
				>
					<div className='space-y-4 mt-4'>
						<Input
							placeholder='Task Title'
							value={todoStore.newTodo.title}
							onChange={(e) =>
								todoStore.setNewTodo({
									...todoStore.newTodo,
									title: e.target.value,
								})
							}
						/>
						<Input
							placeholder='Task Description'
							value={todoStore.newTodo.description}
							onChange={(e) =>
								todoStore.setNewTodo({
									...todoStore.newTodo,
									description: e.target.value,
								})
							}
						/>
					</div>
				</Modal>
			</div>
		</main>
	);
}

export default App;
