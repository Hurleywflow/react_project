/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
	// useContext let us use all of content insiders BookContext we have created, this is removeBook
	const { removeBook } = useContext(BookContext);

	return (
		<li>
			<div className="title">{book.title}</div>
			<div className="author">{book.author}</div>
			<button
				className="delete-button"
				type="button"
				onClick={() => {
					removeBook(book.id);
				}}
			>
				Delete
			</button>
		</li>
	);
};
export default BookDetails;
