import { create } from 'zustand';

export interface ITodoItem {
	title: string;
	description?: string;
}

export interface ITodo {
	id: number;
	todo: ITodoItem;
	isDone: boolean;
}

type Store = {
	todos: ITodo[];
	newTodo: ITodoItem;
	addTodo: () => void;
	setNewTodo: (todoItem: ITodoItem) => void;
};

const useTodoStore = create<Store>((set) => ({
	todos: [],
	newTodo: {
		title: '',
		description: '',
	},
	addTodo() {
		set((state) => {
			const newTodo: ITodo = {
				id: Date.now(),
				todo: state.newTodo,
				isDone: false,
			};

			return {
				...state,
				todos: [...state.todos, newTodo],
				newTodo: {
					title: '',
					description: '',
				},
			};
		});
	},
	setNewTodo(todoItem: ITodoItem) {
		set((state) => ({
			...state,
			newTodo: todoItem,
		}));
	},
}));

export default useTodoStore;
