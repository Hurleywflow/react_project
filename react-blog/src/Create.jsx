import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Hurley');
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		fetch('http://localhost:8000/blogs/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			// history.go(-1);
			history.push('/');
		});
	};

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Blog title:</label>
				<input
					id="title"
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="body">Blog body:</label>
				<textarea
					id="body"
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<label htmlFor="author">Blog author:</label>
				<select
					id="author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="hurley">Hurley</option>
					<option value="nguyen">Nguyen</option>
				</select>
				<button type="submit">Add Blog</button>
			</form>
		</div>
	);
};

export default Create;
