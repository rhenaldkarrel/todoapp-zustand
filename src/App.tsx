import React from 'react';
import Modal from './components/modal';
import { Input } from './components/forms/input';

function App() {
	const [isAddNewTask, setIsAddNewTask] = React.useState<boolean>(false);

  function openModal() {
    setIsAddNewTask(true)
  }

	return (
		<main className='max-w-lg mx-auto border h-screen'>
			<div className='p-4 space-y-4'>
				<h1 className='text-xl sm:text-3xl font-bold'>My Todo List</h1>
				<button
					className='btn btn-primary w-full'
					onClick={openModal}
				>
					Add New Task
				</button>
				<div className='todos'></div>
				<Modal
          title='Add New Task'
          actionButtonText='Save'
          openModal={isAddNewTask}
          closeModal={setIsAddNewTask}
        >
          <div className="space-y-4 mt-4">
            <Input placeholder='Task Title' />
            <Input placeholder='Task Description' />
          </div>
        </Modal>
			</div>
		</main>
	);
}

export default App;
