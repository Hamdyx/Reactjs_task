import React from 'react';
import { Layout } from 'antd';
import PartnersSection from './sections/PartnersSection';
import SocialSection from './sections/SocialSection';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
	return (
		<Footer className="footer">
			<PartnersSection />
			<SocialSection />
		</Footer>
	);
};

export default AppFooter;
