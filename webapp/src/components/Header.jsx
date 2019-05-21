import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<Link className="navbar-brand" to="/">
			Hotels
		</Link>
	</nav>
);

export default Header;
