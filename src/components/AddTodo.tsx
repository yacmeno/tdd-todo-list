import React from "react";
import { ITodo } from "../hooks/useTodos";

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
