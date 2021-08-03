/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, []);
	return (
		<div className="container">
			<div className="content">
				<h2>404</h2>
				<h4>Opps...! Page not found</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit Saepe</p>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
