import React from 'react';
import { Layout } from 'antd';
import TopNav from './layout/TopNav';
import AppFooter from './layout/footer';

const App: React.FC = () => {
	return (
		<Layout>
			<TopNav />
			<AppFooter />
		</Layout>
	);
};

export default App;
