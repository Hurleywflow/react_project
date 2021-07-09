/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const BookContext = createContext();
// createContext let us create all content we needing.

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: 'name of the wind', author: 'patrick ', id: 1 },
		{ title: 'the final empire', author: 'brandon ', id: 2 },
	]);
	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};
	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
		// use Provider to connect content to the App.
	);
};

export default BookContextProvider;
