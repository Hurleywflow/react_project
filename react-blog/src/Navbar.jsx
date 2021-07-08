import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div>
		<nav className="navbar">
			<h1>the Hurley Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New Post</Link>
			</div>
		</nav>
	</div>
);

export default Navbar;
