import React from 'react';
import { Card } from 'antd';
import Images from '../assets/images';
import { Link } from 'react-router-dom';
import ColorsRow from './ColorsRows';

const ShopContent: React.FC = () => {
	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const cardItems = cards.map((item) => <ItemCard key={item} item={item} />);
	return <div className="shop-items">{cardItems}</div>;
};

const ItemCard: React.FC<{ item: number }> = ({ item }) => {
	const itemImg = `Item${item}`;
	type ObjectKey = keyof typeof Images;
	const img = itemImg as ObjectKey;
	return (
		<Link to={`/shop/${item}`} className="shop-items_link">
			<Card className="shop-items_card">
				<img src={Images?.[img]} alt="" />
				<h5>Graphic Design</h5>
				<p>English Department</p>
				<div className="price">
					<h5>$16.48</h5>
					<h5>$6.48</h5>
				</div>
				<ColorsRow />
			</Card>
		</Link>
	);
};

export default ShopContent;
