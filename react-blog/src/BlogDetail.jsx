import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetail = () => {
	const { id } = useParams();
	// id useParams is the idName set up dynamically from blogDetail
	const history = useHistory();
	// import useHistory for redirect to home pages by push
	const {
		data: blog,
		isPending,
		error,
	} = useFetch(`http://localhost:8000/blogs/${id}`);
	const handleDelete = () => {
		fetch(`http://localhost:8000/blogs/${blog.id}`, {
			method: 'DELETE',
		}).then(() => {
			history.push('/');
		});
	};
	return (
		<div className="blog-details">
			{isPending ? <div>Loading...</div> : null}
			{error ? <div>{error}</div> : null}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button type="button" onClick={handleDelete}>
						delete
					</button>
				</article>
			)}
			{/* blog is data import from custome hook useFetch */}
		</div>
	);
};

export default BlogDetail;
