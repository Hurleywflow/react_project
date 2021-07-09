import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
	const { dispatch } = useContext(BookContext);
	// useContext let us use all of content insiders BookContext we have created, this is addBook
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_BOOK', book: { title, author } });
		// dispatch take action ADD_BOOK and payload method we want it to do
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="book title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="text"
				placeholder="author name"
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
			/>
			<input type="submit" value="add book" />
		</form>
	);
};

export default NewBookForm;
