import React from 'react';
import { Breadcrumb, Layout, PageHeader } from 'antd';
import { BreadcrumbSep } from '../icons/icons';

const ShopPage: React.FC = () => {
	return (
		<Layout className="main-header">
			<HeaderWithBreadcrumb />
		</Layout>
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
