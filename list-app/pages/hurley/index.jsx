import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Hurley.module.css';

export const getStaticProps = async () => {
	// use getStaticProps instead of useEffect to fetch data in nextJS
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return {
		props: { users: data },
	};
};
// this function run totally before render below so we get data before render
const People = ({ users }) => (
	// add props: { users: data } above to render below, props is users
	<div>
		<h1>All person</h1>
		{users.map(user => (
			<Link href={`/hurley/${user.id}`} key={user.id}>
				<a className={styles.single}>
					<h3>{user.name}</h3>
				</a>
			</Link>
		))}
	</div>
);

export default People;
