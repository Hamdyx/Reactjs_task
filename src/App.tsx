import React from 'react';
import { Layout } from 'antd';
import TopNav from './layout/TopNav';
import AppFooter from './layout/footer';
import ShopPage from './pages';

const App: React.FC = () => {
	return (
		<Layout>
			<TopNav />
			<ShopPage />
			<AppFooter />
		</Layout>
	);
};

export default App;
