import { v1 as uuid } from 'uuid';

export const bookReducer = (state, action) => {
	// state now is represent the books in like BookContext file
	switch (action.type) {
		case 'ADD_BOOK':
			return [
				...state,
				{
					title: action.book.title,
					author: action.book.author,
					id: uuid(),
				},
			];
		case 'DELETE_BOOK':
			return state.filter((book) => book.id !== action.id);
		default:
			return state;
	}
};
