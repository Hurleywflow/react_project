export const getStaticPaths = async () => {
	// getStaticPaths to generate the Route specific individual id
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	// map data to an array of path objects with params (id)
	const paths = data.map(user => ({
		params: { id: user.id.toString() },
	}));
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps = async context => {
	// getStaticProps to get individual user id
	const { id } = context.params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await res.json();
	return {
		props: { user: data },
	};
};
// paste props properties into Details to render output
const Details = ({ user }) => (
	<div>
		<h1>{user.name}</h1>
		<p>{user.email}</p>
		<p>{user.website}</p>
		<p>{user.address.city}</p>
	</div>
);
export default Details;
