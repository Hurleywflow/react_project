// @ts-nocheck
import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		// this hooks gonna be take images from firebase database and updates to react_project
		const unsub = projectFirestore
			.collection(collection)
			// create images order by newly upload first
			.orderBy('createdAt', 'desc')
			.onSnapshot((snap) => {
				const documents = [];
				snap.forEach((doc) => {
					// push new items to empty documents
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});

		return () => unsub();
		// this is a cleanup function that react will run when
		// a component using the hook unmounted
	}, [collection]);

	return { docs };
};

export default useFirestore;
