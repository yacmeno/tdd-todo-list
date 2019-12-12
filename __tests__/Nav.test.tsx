import React from "react";
import { shallow } from "enzyme";
import { Nav } from "../src/components/Nav";
import { Filters } from "../src/components/TodoApp";

describe("<Nav />", () => {
	test("Should simulate click event to set filter", () => {
		const setFilter = jest.fn();
		const component = shallow(
			<Nav activeFilter={Filters.SHOW_ALL} setFilter={setFilter} />
		);

		component
			.children()
			.not(".active")
			.first()
			.simulate("click");

		expect(setFilter).toBeCalledTimes(1);
	});
});
