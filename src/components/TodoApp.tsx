import React from "react";
import useTodos, { ITodo, ADD_TODO, TOGGLE_TODO } from "../hooks/useTodos";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { Nav } from "./Nav";

export const Filters = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_TODO: "SHOW_TODO",
	SHOW_DONE: "SHOW_DONE",
};

const TodoApp: React.FC = () => {
	const [todos, setTodos] = useTodos();
	const [visibleTodos, setVisibleTodos] = React.useState<ITodo[]>(todos);
	const [visibilityFilter, setVisibilityFilter] = React.useState<string>(
		Filters.SHOW_ALL
	);

	function toggleTodo(todo: ITodo) {
		setTodos({ type: TOGGLE_TODO, payload: todo });
	}

	function onAdd(todo: ITodo) {
		setTodos({ type: ADD_TODO, payload: todo });
	}

	React.useEffect(() => {
		switch (visibilityFilter) {
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
	}, [visibilityFilter, todos]);

	function onFilterChange(filter: string) {
		setVisibilityFilter(filter);
	}

	return (
		<div className="app__container">
			<AddTodo onAdd={onAdd} />
			<Nav activeFilter={visibilityFilter} setFilter={onFilterChange} />
			<TodoList todos={visibleTodos} clickHandler={toggleTodo} />
		</div>
	);
};

export default TodoApp;
