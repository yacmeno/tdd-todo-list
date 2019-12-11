import React from "react";
import { shallow, configure as enzymeConfigure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoApp from "../src/components/App";

enzymeConfigure({ adapter: new Adapter() });

test("Initial test setup", () => {
	const app = shallow(<TodoApp />);
	expect(app.text()).toBe("Hello, world");
});
