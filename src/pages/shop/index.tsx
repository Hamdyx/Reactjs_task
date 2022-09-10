import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Rate, Typography } from 'antd';

import { RootState } from '../../store/configureStore';
import { selectProductIds } from '../../store/reducers/productReducer';
import HeaderWithBreadcrumb from '../../components/HeaderWithBreadcrumb';
import ColorsRow from '../../components/ColorsRows';
import ShopContent from '../../components/ShopItem';
import ItemActions from '../../components/ItemActions';
import ProductCarousel from '../../components/ProductCarousel';
const { Title, Text } = Typography;

const ShopItem: React.FC = () => {
	const productIds = useSelector((state: RootState) =>
		selectProductIds(state)
	).slice(0, 8);

	useEffect(() => {
		window!.scroll(0, 0);
	});

	return (
		<>
			<Layout className="main-header">
				<HeaderWithBreadcrumb />
			</Layout>
			<Layout className="Shop-content_container">
				<div className="shop-item_container">
					<ProductCarousel />
					<div className="item_details">
						<Title level={4}>Floating Phone</Title>
						<div className="review_container">
							<Rate allowHalf defaultValue={4} />
							<Text>10 Reviews</Text>
						</div>
						<Title level={3} className="price">
							$1,139.33
						</Title>
						<div className="availability">
							<Text className="label">Availability :</Text>
							<Text className="status">In Stock</Text>
						</div>
						<Text className="details">
							Met minim Mollie non desert Alamo est sit cliquey dolor do met
							sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
							venial consequent sent nostrum met.
						</Text>
						<ColorsRow />
						<ItemActions />
					</div>
				</div>
			</Layout>
			<Layout className="best_seller-container">
				<Title level={3}>BESTSELLER PRODUCTS</Title>
				<ShopContent pageIds={productIds} />
			</Layout>
		</>
	);
};

export default ShopItem;
