import React from "react";
import useTodos, { ITodo, ADD_TODO, TOGGLE_TODO } from "../hooks/useTodos";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { Nav } from "./Nav";

const TodoApp: React.FC = () => {
	const [todos, setTodos] = useTodos();

	function toggleTodo(todo: ITodo) {
		setTodos({ type: TOGGLE_TODO, payload: todo });
	}

	function onAdd(todo: ITodo) {
		setTodos({ type: ADD_TODO, payload: todo });
	}

	return (
		<div className="app__container">
			<AddTodo onAdd={onAdd} />
			<Nav />
			<TodoList todos={todos} clickHandler={toggleTodo} />
		</div>
	);
};

export default TodoApp;
