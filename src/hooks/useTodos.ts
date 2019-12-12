import React from "react";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export interface ITodo {
	id: number;
	text: string;
	isDone: boolean;
}
interface AddTodo {
	type: typeof ADD_TODO;
	payload: ITodo;
}
interface RemoveTodo {
	type: typeof REMOVE_TODO;
	payload: ITodo["id"];
}

type TodoActionTypes = AddTodo | RemoveTodo;

interface TodosState {
	items: ITodo[];
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
	items: [],
};

const useTodos = () => {
	const [todos, dispatch] = React.useReducer(reducer, initialState);

	return [todos, dispatch];
};

export default useTodos;
