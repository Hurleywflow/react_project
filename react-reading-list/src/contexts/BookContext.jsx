import { createContext, useState } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();
const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ tittle: 'name of the wind', author: 'patrick', id: 1 },
		{ tittle: 'the final empire', author: 'brandon', id: 2 },
	]);
	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};
};
