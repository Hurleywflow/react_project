/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();
// createContext let us create all content we needing.

const BookContextProvider = (props) => {
	// // before add books to localStorage
	// const [books, dispatch] = useReducer(bookReducer, []);
	// after add books to localStorage
	const [books, dispatch] = useReducer(bookReducer, [], () => {
		const localData = localStorage.getItem('myBook');
		return localData ? JSON.parse(localData) : [];
	});
	useEffect(() => {
		localStorage.setItem('myBook', JSON.stringify(books));
	}, [books]);

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
		// use Provider to connect content to the App.
	);
};

export default BookContextProvider;
