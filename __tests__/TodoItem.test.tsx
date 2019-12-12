import React from "react";
import { shallow } from "enzyme";

import { TodoItem } from "../src/components/App";

describe("<TodoItem />", () => {
	test("Should display a todo item", () => {
		const todo = { id: 0, text: "Cook something good" };
		const clickHandler = jest.fn();

		const component = shallow(
			<TodoItem todo={todo} clickHandler={clickHandler} />
		);

		expect(component.text()).toBe(todo.text);
	});

	test("Should simulate click event", () => {
		const todo = { id: 0, text: "Cook something good" };
		const clickHandler = jest.fn();

		const component = shallow(
			<TodoItem todo={todo} clickHandler={clickHandler} />
		);
		component.simulate("click");

		expect(clickHandler).toBeCalledTimes(1);
	});
});
