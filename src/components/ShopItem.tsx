import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import Images from '../assets/images';
import { Link } from 'react-router-dom';
import ColorsRow from './ColorsRows';
import { RootState } from '../store/configureStore';
import { selectProductById } from '../store/reducers/productReducer';

const ShopContent: React.FC<{ limit?: number }> = ({ limit = 12 }) => {
	const cards = Array(limit)
		.fill('item')
		.map((el, i) => i + 1);
	const cardItems = cards.map((item) => <ItemCard key={item} itemId={item} />);
	return <div className="shop-items">{cardItems}</div>;
};

const ItemCard: React.FC<{ itemId: number }> = ({ itemId }) => {
	const item = useSelector((state: RootState) =>
		selectProductById(state, itemId)
	);
	console.log('ItemCard =====> item', item);
	const itemImg = `Item${item?.id}`;
	type ObjectKey = keyof typeof Images;
	const img = itemImg as ObjectKey;
	return (
		<Link to={`/shop/${item?.id}`} className="shop-items_link">
			<Card className="shop-items_card">
				<img src={Images?.[img]} alt="" />
				<h5>{item?.title}</h5>
				<p>{item?.subTitle}</p>
				<div className="price">
					<h5>{item?.price}</h5>
					<h5>{item?.discount}</h5>
				</div>
				<ColorsRow />
			</Card>
		</Link>
	);
};

export default ShopContent;
