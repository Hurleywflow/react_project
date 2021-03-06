import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => (
	<ul className="right">
		<li>
			<NavLink to="/">SignUp</NavLink>
		</li>
		<li>
			<NavLink to="/">Login</NavLink>
		</li>
	</ul>
);

export default SignedOutLinks;
