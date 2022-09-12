import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Input, Select, Button, Typography, Pagination } from 'antd';
import HeaderWithBreadcrumb from '../components/HeaderWithBreadcrumb';
import CardItem from '../components/CardItem';
import ShopContent from '../components/ShopItem';
import { RootState, useAppDispatch } from '../store/configureStore';
import {
	searchProducts,
	selectAllProducts,
	selectProductIds,
	sortProducts,
} from '../store/reducers/productReducer';
import { EntityId } from '@reduxjs/toolkit';
const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

const ShopPage: React.FC = () => {
	const productIds = useSelector((state: RootState) => selectProductIds(state));
	const searchPattern = useSelector(
		(state: RootState) => state?.products?.searchPattern
	);
	const [pageIds, setPageIds] = useState(productIds.slice(0, 12));
	const [filtered, setFiltered] = useState<EntityId[]>(productIds);

	const cards = [1, 2, 3, 4, 5];
	const cardItems = cards.map((item) => <CardItem key={item} />);

	const onPageChange = (page: number, pageSize: number) => {
		const pageStart = (page - 1) * pageSize;
		const pageEnd = page * pageSize;
		const pageContent = filtered.slice(pageStart, pageEnd);
		setPageIds(pageContent);
	};
	useEffect(() => {
		let _filtered = [...productIds];
		if (searchPattern) {
			_filtered = _filtered.filter((el: any) =>
				String(el).startsWith(searchPattern)
			);

			setFiltered(_filtered);
		} else setFiltered([...productIds]);
		setPageIds(_filtered.slice(0, 12));
	}, [productIds, searchPattern]);
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
		dispatch(sortProducts({ sortProp, allProduct }));
	};
	const onSearch = (value: string) => {
		dispatch(searchProducts(value));
	};
	return (
		<div className="filter-row">
			<Title level={5}>Showing all 12 results</Title>
			<Search placeholder="Search" onSearch={onSearch} />

			<div className="filter_section">
				<Select defaultValue="Name" onSelect={handleSortChange}>
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
