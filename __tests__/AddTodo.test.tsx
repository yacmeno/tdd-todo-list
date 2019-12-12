import React from "react";
import { shallow } from "enzyme";
import { AddTodo } from "../src/components/AddTodo";

describe("<AddTodo />", () => {
	test("Should have invalid state on empty input", () => {
		const onAdd = jest.fn();
		const component = shallow(<AddTodo onAdd={onAdd} />);

		component.find("input").simulate("change", { target: { value: "" } });
		//@ts-ignore
		expect(component.state().isInvalid).toBe(true);
	});

	test("Should have valid state on non-empty input", () => {
		const onAdd = jest.fn();
		const component = shallow(<AddTodo onAdd={onAdd} />);

		component
			.find("input")
			.simulate("change", { target: { value: "Not empty" } });

		//@ts-ignore
		expect(component.state().isInvalid).toBe(false);
	});

	test("Should disallow adding on invalid state", () => {
		const onAdd = jest.fn();
		const component = shallow(<AddTodo onAdd={onAdd} />);

		component.find("input").simulate("change", { target: { value: "" } });
		component.find("input").simulate("keydown", { key: "Enter" });

		expect(component.find("button").is("[disabled]")).toBe(true);
		expect(onAdd).toBeCalledTimes(0);
	});

	test("Should handle valid submissions", () => {
		const onAdd = jest.fn();
		const component = shallow(<AddTodo onAdd={onAdd} />);

		// Add a todo through the button
		component
			.find("input")
			.simulate("change", { target: { value: "Not empty" } });
		component.find("button").simulate("click");

		//Assert reset of input field
		//@ts-ignore
		expect(component.state().currentTodo).toBe("");

		// Add a todo through enter key
		component
			.find("input")
			.simulate("change", { target: { value: "Not empty 2" } });
		component.find("input").simulate("keydown", { key: "Enter" });

		expect(onAdd).toBeCalledTimes(2);
	});
});
