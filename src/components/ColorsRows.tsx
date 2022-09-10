import React from 'react';

const ColorsRow: React.FC = () => {
	const colors = [1, 2, 3, 4].map((col) => <span key={col} />);
	return <div className="colors">{colors}</div>;
};

export default ColorsRow;
