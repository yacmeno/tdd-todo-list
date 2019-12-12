import React from "react";
import { Filters } from "./TodoApp";

interface INavProps {
	activeFilter: string;
	setFilter: (filter: string) => void;
}

export const Nav: React.FC<INavProps> = ({ activeFilter, setFilter }) => {
	return (
		<ul className="navbar">
			<li
				className={activeFilter === Filters.SHOW_ALL ? "active" : ""}
				onClick={() => setFilter(Filters.SHOW_ALL)}
			>
				All
			</li>
			<li
				className={activeFilter === Filters.SHOW_TODO ? "active" : ""}
				onClick={() => setFilter(Filters.SHOW_TODO)}
			>
				Todo
			</li>
			<li
				className={activeFilter === Filters.SHOW_DONE ? "active" : ""}
				onClick={() => setFilter(Filters.SHOW_DONE)}
			>
				Done
			</li>
		</ul>
	);
};
