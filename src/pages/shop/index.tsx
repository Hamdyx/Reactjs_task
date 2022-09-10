import React from 'react';
import { Layout, Typography, Button } from 'antd';
import HeaderWithBreadcrumb from '../../components/HeaderWithBreadcrumb';
import Images from '../../assets/images';
import { FilledStar, OutineStar } from '../../assets/icons/icons';
import {
	HeartOutlined,
	ShoppingCartOutlined,
	EyeOutlined,
} from '@ant-design/icons';
import ColorsRow from '../../components/ColorsRows';
import ShopContent from '../../components/ShopItem';
const { Title, Text } = Typography;

const ShopItem: React.FC = () => {
	return (
		<>
			<Layout className="main-header">
				<HeaderWithBreadcrumb />
			</Layout>
			<Layout className="Shop-content_container">
				<div className="shop-item_container">
					<div className="aa">
						<img src={Images.Item1} alt="product item" />
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
						<div className="item_actions">
							<Button type="primary" className="filter_button">
								Add To Cart
							</Button>
							<Button className="action_button">
								<HeartOutlined />
							</Button>
							<Button className="action_button">
								<ShoppingCartOutlined />
							</Button>
							<Button className="action_button">
								<EyeOutlined />
							</Button>
						</div>
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
