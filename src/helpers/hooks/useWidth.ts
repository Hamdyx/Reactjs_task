import { useEffect, useState } from 'react';

const useWidth = () => {
	const [width, setWidth] = useState<number>(
		typeof window !== 'undefined' ? window.innerWidth : 0
	); // default width, detect on server.
	const [expanded, setExpanded] = useState<any>(
		typeof window !== 'undefined' &&
			window.matchMedia('(min-width: 1200px)').matches
	);

	useEffect(() => {
		const handleResize = () => {
			typeof window !== 'undefined' && setWidth(window.innerWidth);
			setExpanded(
				typeof window !== 'undefined' &&
					window.matchMedia('(min-width: 1200px)').matches
			);
		};
		typeof window !== 'undefined' &&
			window.addEventListener('resize', handleResize);
		return () =>
			typeof window !== 'undefined'
				? window.removeEventListener('resize', handleResize)
				: undefined;
	}, []);

	return { width, expanded, setExpanded };
};

export default useWidth;
