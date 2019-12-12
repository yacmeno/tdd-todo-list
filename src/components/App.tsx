import React from "react";
import useTodos, { ITodo, ADD_TODO, TOGGLE_TODO } from "../hooks/useTodos";

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

interface IAddTodoProps {
	onAdd: (todo: ITodo) => void;
}
interface IAddTodoState {
	currentId: number;
	currentTodo: string;
	isInvalid: boolean;
}

export class AddTodo extends React.Component<IAddTodoProps, IAddTodoState> {
	readonly state: IAddTodoState = {
		currentId: 0,
		currentTodo: "",
		isInvalid: true,
	};

	private onInput(e: React.ChangeEvent<HTMLInputElement>) {
		const invalidInput = e.target.value.trim() === "";
		this.setState({
			currentTodo: e.target.value,
			isInvalid: invalidInput ? true : false,
		});
	}

	private handleReturnKey(e: React.KeyboardEvent<HTMLInputElement>) {
		if (this.state.isInvalid) {
			return;
		}

		if (e.key === "Enter") {
			this.handleSubmit();
		}
	}

	private handleSubmit() {
		this.props.onAdd({
			id: this.state.currentId,
			text: this.state.currentTodo,
			isDone: false,
		});
		this.setState(prevState => {
			return {
				currentId: prevState.currentId + 1,
				currentTodo: "",
				isInvalid: true,
			};
		});
	}

	render() {
		const { currentTodo, isInvalid } = this.state;

		return (
			<div className="todo__header">
				<input
					type="text"
					onChange={this.onInput.bind(this)}
					onKeyDown={this.handleReturnKey.bind(this)}
					value={currentTodo}
				/>
				<button
					type="button"
					disabled={isInvalid}
					onClick={() => this.handleSubmit()}
				>
					Add Todo
				</button>
			</div>
		);
	}
}

const Nav: React.FC = () => {
	return <div>Nav</div>;
};

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

export default TodoApp;
