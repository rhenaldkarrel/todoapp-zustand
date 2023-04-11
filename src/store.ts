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
	toBeUpdatedTodo: ITodoItem;
	addTodo: () => void;
	setNewTodo: (todoItem: ITodoItem) => void;
	setToBeUpdatedTodo: (todoItem: ITodoItem) => void;
	removeTodo: (id: number) => void;
	updateTodo: (id: number) => void;
  markAsDone: (id:number) => void;
};

const useTodoStore = create<Store>((set) => ({
	todos: [],
	newTodo: {
		title: '',
		description: '',
	},
	toBeUpdatedTodo: {
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
	updateTodo(id: number) {
		set((state) => {
			const toBeUpdatedTodo = state.todos.find((todo) => todo.id === id)!;

			const updatedTodo = {
				...toBeUpdatedTodo,
				todo: state.toBeUpdatedTodo,
			};

			const updatedTodos = state.todos.map((todo) =>
				todo.id === id ? updatedTodo : todo
			);

			return {
				...state,
				todos: updatedTodos,
				toBeUpdatedTodo: {
					title: '',
					description: '',
				},
			};
		});
	},
	removeTodo(id: number) {
		set((state) => {
			const updatedTodos = state.todos.filter((todo) => todo.id !== id);

			return {
				...state,
				todos: updatedTodos,
			};
		});
	},
	setNewTodo(todoItem: ITodoItem) {
		set((state) => ({
			...state,
			newTodo: todoItem,
		}));
	},
	setToBeUpdatedTodo(todoItem: ITodoItem) {
		set((state) => ({
			...state,
			toBeUpdatedTodo: todoItem,
		}));
	},
  markAsDone(id: number) {
    set((state) => {
      const updatedTodo = state.todos.map(todo => {
        return {
          ...todo,
          isDone: todo.id === id ? !todo.isDone : todo.isDone,
        }
      })

      return {
        ...state,
        todos: updatedTodo,
      }
    })
  }
}));

export default useTodoStore;
