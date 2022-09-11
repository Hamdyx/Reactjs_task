import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Input, Select, Button, Typography, Pagination } from 'antd';
import HeaderWithBreadcrumb from '../components/HeaderWithBreadcrumb';
import CardItem from '../components/CardItem';
import ShopContent from '../components/ShopItem';
import { RootState, useAppDispatch } from '../store/configureStore';
import {
	selectAllProducts,
	selectProductIds,
	sortProducts,
} from '../store/reducers/productReducer';
const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

const ShopPage: React.FC = () => {
	const productIds = useSelector((state: RootState) => selectProductIds(state));
	const [pageIds, setPageIds] = useState(productIds.slice(0, 12));
	const cards = [1, 2, 3, 4, 5];
	const cardItems = cards.map((item) => <CardItem key={item} />);

	const onPageChange = (page: number, pageSize: number) => {
		const pageStart = (page - 1) * pageSize;
		const pageEnd = page * pageSize;
		const pageContent = productIds.slice(pageStart, pageEnd);
		setPageIds(pageContent);
	};

	useEffect(() => {
		setPageIds(productIds.slice(0, 12));
	}, [productIds]);
	return (
		<>
			<Layout className="main-header">
				<HeaderWithBreadcrumb />
				<div className="shop-cards">{cardItems}</div>
			</Layout>
			<Layout className="Shop-content_container">
				<FilterRow />
				<ShopContent pageIds={pageIds} />
				<Pagination
					defaultCurrent={1}
					pageSize={12}
					total={36}
					onChange={onPageChange}
					prevIcon={'First'}
					nextIcon={'Next'}
				/>
			</Layout>
		</>
	);
};
const FilterRow: React.FC = () => {
	const dispatch = useAppDispatch();
	const allProduct = useSelector((state: RootState) =>
		selectAllProducts(state)
	);
	const handleSortChange = (sortProp: string) => {
		console.log('handleSortChange =====> sortProp', sortProp);
		dispatch(sortProducts({ sortProp, allProduct }));
	};
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
					onChange={handleSortChange}
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
