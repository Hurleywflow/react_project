import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Homepage</h1>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum
				vero enim eaque modi consectetur aut alias perspiciatis eos eveniet.
				Autem optio quasi quas. Pariatur ex minima repellendus quas saepe?
			</p>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum
				vero enim eaque modi consectetur aut alias perspiciatis eos eveniet.
				Autem optio quasi quas. Pariatur ex minima repellendus quas saepe?
			</p>
			<Link href="/hurley">
				<a className={styles.btn}>See Hurley listing</a>
			</Link>
		</div>
	);
}
