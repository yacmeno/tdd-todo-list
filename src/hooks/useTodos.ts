import React from "react";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

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

type UseTodosReturnType = [ITodo[], React.Dispatch<TodoActionTypes>];

const useTodos = (): UseTodosReturnType => {
	const [todos, dispatch] = React.useReducer(reducer, []);

	return [todos, dispatch];
};

export default useTodos;
