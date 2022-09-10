import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import { RootState } from '../../store/configureStore';
import Images from '../../assets/images';
import { FilledStar, OutineStar } from '../../assets/icons/icons';
import { selectProductById } from '../../store/reducers/productReducer';
import HeaderWithBreadcrumb from '../../components/HeaderWithBreadcrumb';
import ColorsRow from '../../components/ColorsRows';
import ShopContent from '../../components/ShopItem';
import ItemActions from '../../components/ItemActions';
const { Title, Text } = Typography;

const ShopItem: React.FC = () => {
	const { id } = useParams();
	const item = useSelector((state: RootState) =>
		selectProductById(state, id || '1')
	);

	const itemImg = `Item${item?.id}`;
	type ObjectKey = keyof typeof Images;
	const src = itemImg as ObjectKey;
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
					<div className="aa">
						<img src={Images?.[src]} alt="product item" />
					</div>
					<div className="item_details">
						<Title level={4}>Floating Phone</Title>
						<div className="review_container">
							<div className="stars">
								<FilledStar />
								<FilledStar />
								<FilledStar />
								<FilledStar />
								<OutineStar />
							</div>
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
				<ShopContent limit={8} />
			</Layout>
		</>
	);
};

export default ShopItem;
