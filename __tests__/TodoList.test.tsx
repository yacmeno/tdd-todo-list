import React from "react";
import { shallow } from "enzyme";

import { TodoList, ITodoListProps } from "../src/components/App";

describe("<TodoList />", () => {
	test("Should handle displaying 0 items", () => {
		const todos: ITodoListProps["todos"] = [];
		const clickHandler = jest.fn();

		const component = shallow(
			<TodoList todos={todos} clickHandler={clickHandler} />
		);

		expect(component.is("[data-test-no-items]")).toBe(true);
	});

	test("Should handle displaying as many items as given", () => {
		const todos = [
			{ id: 1, text: "Cook chicken", isDone: true },
			{ id: 2, text: "Travel to space", isDone: false },
			{ id: 3, text: "Come back to earth", isDone: false },
		];
		const clickHandler = jest.fn();

		const component = shallow(
			<TodoList todos={todos} clickHandler={clickHandler} />
		);

		expect(component.find("ul").children()).toHaveLength(3);
	});
});
