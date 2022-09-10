import React from 'react';
import { Typography } from 'antd';
import { Facebook, Instagram, Twitter } from '../../../assets/icons/icons';

const { Paragraph } = Typography;

const SocialSection: React.FC = () => {
	return (
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
	);
};

export default SocialSection;
