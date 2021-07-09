/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();
// createContext let us create all content we needing.

const BookContextProvider = (props) => {
	const [books, dispatch] = useReducer(bookReducer, []);

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
		// use Provider to connect content to the App.
	);
};

export default BookContextProvider;
