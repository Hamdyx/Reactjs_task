import React from 'react';
import { Layout } from 'antd';
import TopNav from './layout/TopNav';
import AppFooter from './layout/footer';
import ShopPage from './pages';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<Layout>
			<TopNav />

			<Routes>
				<Route path="/" element={<ShopPage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
			<AppFooter />
		</Layout>
	);
};

export default App;
