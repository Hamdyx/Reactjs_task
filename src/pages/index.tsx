import React from 'react';
import { Layout } from 'antd';
import ShopItem from '../components/ShopItem';
import HeaderWithBreadcrumb from '../components/HeaderWithBreadcrumb';
import CardItem from '../components/CardItem';

const ShopPage: React.FC = () => {
	const cards = [1, 2, 3, 4, 5];
	const cardItems = cards.map((item) => <CardItem key={item} />);
	return (
		<Layout className="main-header">
			<HeaderWithBreadcrumb />
			<div className="shop-cards">{cardItems}</div>
			<ShopItem />
		</Layout>
	);
};

export default ShopPage;
