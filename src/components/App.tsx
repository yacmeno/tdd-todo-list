import React from "react";
import useTodos, { Todo } from "../hooks/useTodos";

const TodoApp: React.FC = () => {
	const [todos, setTodos] = useTodos();
	return (
		<div className="app__container">
			<AddTodo />
			<Nav />
			<TodoList />
		</div>
	);
};

const AddTodo: React.FC = () => {
	return <div>Header</div>;
};
const Nav: React.FC = () => {
	return <div>Nav</div>;
};

const TodoList: React.FC = () => {
	const todos = [
		{ id: 1, text: "Cook chicken" },
		{ id: 2, text: "Travel to space" },
		{ id: 2, text: "Come back to earth" },
	];

	function clickHandler() {
		return;
	}

	return (
		<ul className="todo__items">
			{todos.map(todo => (
				<TodoItem todo={todo} clickHandler={clickHandler} />
			))}
		</ul>
	);
};

interface ITodoItemProps {
	todo: Todo;
	clickHandler: () => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({ todo, clickHandler }) => {
	return (
		<li className="todo__item" key={todo.id} onClick={clickHandler}>
			{todo.text}
		</li>
	);
};

export default TodoApp;
