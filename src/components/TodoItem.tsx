import React from "react";
import { ITodo } from "../hooks/useTodos";

interface ITodoItemProps {
	todo: ITodo;
	clickHandler: (todo: ITodo) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({ todo, clickHandler }) => {
	const className = `todo__item ${todo.isDone ? "todo__item--done" : ""}`;

	return (
		<li className={className} onClick={() => clickHandler(todo)}>
			{todo.text}
		</li>
	);
};
