/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
	// useContext let us use all of content insiders BookContext we have created, this is removeBook
	const { dispatch } = useContext(BookContext);

	return (
		<li>
			<div className="title">{book.title}</div>
			<div className="author">{book.author}</div>
			<button
				className="delete-button"
				type="button"
				onClick={() => {
					dispatch({ type: 'DELETE_BOOK', id: book.id });
          // dispatch take action DELETE_BOOK and payload method we want it to do
				}}
			>
				Delete
			</button>
		</li>
	);
};
export default BookDetails;
