import Head from 'next/head';
import React from 'react';

export default function About() {
	return (
		<>
			<Head>
				<title>Hurley List | About</title>
				<meta name="keywords" content="hurley" />
			</Head>
			{/* this Head for title of the every single pages */}
			<div>
				<h1>About</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum
					vero enim eaque modi consectetur aut alias perspiciatis eos eveniet.
					Autem optio quasi quas. Pariatur ex minima repellendus quas saepe?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum
					vero enim eaque modi consectetur aut alias perspiciatis eos eveniet.
					Autem optio quasi quas. Pariatur ex minima repellendus quas saepe?
				</p>
			</div>
		</>
	);
}
