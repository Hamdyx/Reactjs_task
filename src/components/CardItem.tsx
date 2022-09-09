const CardItem: React.FC<{ title?: string; details?: string }> = ({
	title = 'CLOTHS',
	details = '5 Items',
}) => {
	return (
		<div className="card-item">
			<h5>{title}</h5>
			<p>{details}</p>
		</div>
	);
};

export default CardItem;
