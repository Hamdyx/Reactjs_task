import React from 'react';
import { Layout } from 'antd';
import TopNav from './layout/TopNav';
import AppFooter from './layout/footer';
import ShopPage from './pages';
import { Route, Routes } from 'react-router-dom';
import ShopItem from './pages/shop';

const App: React.FC = () => {
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
