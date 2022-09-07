import React from 'react';
import { Layout, Typography } from 'antd';
import { Facebook, Instagram, Twitter } from '../icons/icons';

const { Paragraph } = Typography;
const { Footer } = Layout;

const AppFooter: React.FC = () => {
	return (
		<Footer className="footer">
			<section className="social-section">
				<Typography.Title level={3} className="logo">
					Bandage
				</Typography.Title>
				<div className="social-links">
					<Paragraph className="item">
						<Facebook />
					</Paragraph>
					<Paragraph className="item">
						<Instagram />
					</Paragraph>
					<Paragraph className="item">
						<Twitter />
					</Paragraph>
				</div>
			</section>
		</Footer>
	);
};

export default AppFooter;
