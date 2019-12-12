import React from "react";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const Filters = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_TODO: "SHOW_TODO",
	SHOW_DONE: "SHOW_DONE",
};

const useTodos = (): UseTodosReturnType => {
	const [todos, dispatch] = React.useReducer(reducer, []);
	const [visibleTodos, setVisibleTodos] = React.useState<ITodo[]>([]);
	const [filter, setFilter] = React.useState<string>(Filters.SHOW_ALL);

	React.useEffect(() => {
		switch (filter) {
			case Filters.SHOW_ALL:
				setVisibleTodos(todos);
				return;
			case Filters.SHOW_TODO: {
				const items = todos.filter(todo => todo.isDone !== true);
				setVisibleTodos(items);
				return;
			}
			case Filters.SHOW_DONE: {
				const items = todos.filter(todo => todo.isDone === true);
				setVisibleTodos(items);
				return;
			}
		}
	}, [todos, filter]);

	return [filter, setFilter, visibleTodos, dispatch];
};

function reducer(state: ITodo[], action: TodoActionTypes) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];

		case TOGGLE_TODO: {
			const toggledTodoIndex = state.findIndex(
				todo => todo.id === action.payload.id
			);

			let nextItems = [...state];
			nextItems[toggledTodoIndex] = {
				...state[toggledTodoIndex],
				isDone: !state[toggledTodoIndex].isDone,
			};

			return nextItems;
		}

		default:
			throw new Error("Invalid todo action");
	}
}

export interface ITodo {
	id: number;
	text: string;
	isDone: boolean;
}
interface AddTodo {
	type: typeof ADD_TODO;
	payload: ITodo;
}
interface ToggleTodo {
	type: typeof TOGGLE_TODO;
	payload: ITodo;
}

export type TodoActionTypes = AddTodo | ToggleTodo;

type UseTodosReturnType = [
	string,
	React.Dispatch<React.SetStateAction<string>>,
	ITodo[],
	React.Dispatch<TodoActionTypes>
];

export default useTodos;
