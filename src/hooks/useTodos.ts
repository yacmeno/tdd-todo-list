import React from "react";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export interface Todo {
	id: number;
	text: string;
}
interface AddTodo {
	type: typeof ADD_TODO;
	payload: Todo;
}
interface RemoveTodo {
	type: typeof REMOVE_TODO;
	payload: Todo["id"];
}

type TodoActionTypes = AddTodo | RemoveTodo;

interface TodosState {
	todos: Todo[];
	completed: Todo[];
}

function reducer(state: TodosState, action: TodoActionTypes) {
	switch (action.type) {
		case ADD_TODO:
			return { ...state };

		case REMOVE_TODO:
			return { ...state };

		default:
			throw new Error("Invalid todo action");
	}
}

const initialState: TodosState = {
	todos: [],
	completed: [],
};

const useTodos = () => {
	const [todos, dispatch] = React.useReducer(reducer, initialState);

	return [todos, dispatch];
};

export default useTodos;
