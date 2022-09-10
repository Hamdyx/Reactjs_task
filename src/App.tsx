import React, { useEffect } from 'react';
import { Layout } from 'antd';
import TopNav from './layout/TopNav';
import AppFooter from './layout/footer';
import ShopPage from './pages';
import { Route, Routes } from 'react-router-dom';
import ShopItem from './pages/shop';
import { useAppDispatch } from './store/configureStore';
import { fetchProducts } from './store/reducers/productReducer';

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<Layout>
			<TopNav />

			<Routes>
				<Route path="/" element={<ShopPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/shop/:id" element={<ShopItem />} />
			</Routes>
			<AppFooter />
		</Layout>
	);
};

export default App;
