import React, { useEffect } from 'react';
import { Layout, Input, Select, Button, Typography } from 'antd';
import HeaderWithBreadcrumb from '../components/HeaderWithBreadcrumb';
import CardItem from '../components/CardItem';
import ShopContent from '../components/ShopItem';
import { useAppDispatch } from '../store/configureStore';
import { fetchProducts } from '../store/reducers/productReducer';
const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

const ShopPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const cards = [1, 2, 3, 4, 5];
	const cardItems = cards.map((item) => <CardItem key={item} />);
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<>
			<Layout className="main-header">
				<HeaderWithBreadcrumb />
				<div className="shop-cards">{cardItems}</div>
			</Layout>
			<Layout className="Shop-content_container">
				<FilterRow />
				<ShopContent />
			</Layout>
		</>
	);
};
const FilterRow: React.FC = () => {
	return (
		<div className="filter-row">
			<Title level={5}>Showing all 12 results</Title>
			<Search
				placeholder="Search"
				// onSearch={onSearch}
			/>

			<div className="filter_section">
				<Select
					defaultValue="Name"
					style={{ width: 120 }}
					// onChange={handleChange}
				>
					<Option value="price">Price</Option>
					<Option value="Name">Name</Option>
				</Select>
				<Button type="primary" className="filter_button">
					Filter
				</Button>
			</div>
		</div>
	);
};

export default ShopPage;
