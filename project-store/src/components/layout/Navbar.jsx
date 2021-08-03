import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignOutLink';

const Navbar = () => (
	<nav className="nav-wrapper grey darken-3">
		<div className="container">
			<Link to="/" className="brand-logo">
				Hurley Plan
			</Link>
			<SignedInLinks />
			<SignedOutLinks />
		</div>
	</nav>
);

export default Navbar;
