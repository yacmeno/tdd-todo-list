import React from "react";
import { ITodo } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export interface ITodoListProps {
	todos: ITodo[];
	clickHandler: (todo: ITodo) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({ todos, clickHandler }) => {
	if (todos.length === 0) {
		return <p data-test-no-items="true">No items here!</p>;
	}

	return (
		<ul className="todo__items">
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} clickHandler={clickHandler} />
			))}
		</ul>
	);
};
