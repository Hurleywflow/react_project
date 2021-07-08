import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		// clean up error when we are Switching quickly between pages and fetch still running by using useEffect cleanup AbortController!
		const abortCont = new AbortController();
		fetch(url, { signal: abortCont.signal })
			.then((res) => {
				if (!res.ok) {
					throw Error('Could not fetch data for that resource');
				}
				return res.json();
			})
			.then((result) => {
				setData(result);
				setIsPending(false);
				setError(null);
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('fetch aborted');
				} else {
					setIsPending(false);
					setError(err.message);
				}
			});
		return () => abortCont.abort();
	}, [url]);
	return { data, isPending, error };
};

export default useFetch;
