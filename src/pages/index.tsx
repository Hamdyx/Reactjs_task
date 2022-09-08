import React from 'react';
import { Breadcrumb, Layout, PageHeader } from 'antd';
import { BreadcrumbSep } from '../assets/icons/icons';
import ShopItem from '../components/ShopItem';

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
const HeaderWithBreadcrumb: React.FC = () => {
	return (
		<PageHeader className="site-page-header" title="Shop">
			<Breadcrumb separator={<BreadcrumbSep />}>
				<Breadcrumb.Item href="" className="active">
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item href="">Shop</Breadcrumb.Item>
			</Breadcrumb>
		</PageHeader>
	);
};

export default ShopPage;
