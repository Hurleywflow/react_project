import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs');

	return (
		<div className="home">
			{error ? <div>{error}</div> : null}
			{isPending ? <div>Loading...</div> : null}
			{blogs && <BlogList blogs={blogs} title="All Blog!" />}
		</div>
	);
};

export default Home;
