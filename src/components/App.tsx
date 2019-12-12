import React from "react";
import useTodos, { ITodo } from "../hooks/useTodos";

const TodoApp: React.FC = () => {
	const [todos, setTodos] = useTodos();

	const dummyTodos = [
		{ id: 1, text: "Cook chicken", isDone: true },
		{ id: 2, text: "Travel to space", isDone: false },
		{ id: 2, text: "Come back to earth", isDone: false },
	];

	function clickHandler() {
		return;
	}

	return (
		<div className="app__container">
			<AddTodo />
			<Nav />
			<TodoList todos={dummyTodos} clickHandler={clickHandler} />
		</div>
	);
};

const AddTodo: React.FC = () => {
	return <div>Header</div>;
};
const Nav: React.FC = () => {
	return <div>Nav</div>;
};

interface ITodoListProps {
	todos: ITodo[];
	clickHandler: () => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, clickHandler }) => {
	return (
		<ul className="todo__items">
			{todos.map(todo => (
				<TodoItem todo={todo} clickHandler={clickHandler} />
			))}
		</ul>
	);
};

interface ITodoItemProps {
	todo: ITodo;
	clickHandler: () => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({ todo, clickHandler }) => {
	const className = `todo__item${todo.isDone ? "--done" : ""}`;

	return (
		<li className={className} key={todo.id} onClick={clickHandler}>
			{todo.text}
		</li>
	);
};

export default TodoApp;
