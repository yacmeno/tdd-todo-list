import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { TodoItem } from "../src/components/TodoItem";

describe("<TodoItem />", () => {
	test("Should display a todo item", () => {
		const todo = { id: 0, text: "Cook something good", isDone: false };
		const clickHandler = jest.fn();

		const component = shallow(
			<TodoItem todo={todo} clickHandler={clickHandler} />
		);

		expect(component.text()).toBe(todo.text);
	});

	test("Should simulate click event", () => {
		const todo = { id: 0, text: "Cook something good", isDone: false };
		const clickHandler = jest.fn();

		const component = shallow(
			<TodoItem todo={todo} clickHandler={clickHandler} />
		);
		component.simulate("click");

		expect(clickHandler).toBeCalledTimes(1);
	});

	test("Should have different className if item isDone", () => {
		const todo = { id: 0, text: "Cook something good", isDone: true };
		const clickHandler = jest.fn();

		const componentTree = renderer
			.create(<TodoItem todo={todo} clickHandler={clickHandler} />)
			.toJSON();

		expect(componentTree).toMatchSnapshot();
	});
});
