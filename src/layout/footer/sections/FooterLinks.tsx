import React from 'react';
import { List, Typography, Input } from 'antd';

const { Paragraph } = Typography;
const { Search } = Input;

const FooterLinks: React.FC = () => {
	return (
		<section className="footer-links">
			<LinksGroup
				title="Company Info"
				links={['About Us', 'Carrier', 'We are hiring', 'Blog']}
			/>
			<LinksGroup
				title="Legal"
				links={['About Us', 'Carrier', 'We are hiring', 'Blog']}
			/>
			<LinksGroup
				title="Features"
				links={[
					'Business Marketing',
					'User Analytic',
					'Live Chat',
					'Unlimited Support',
				]}
			/>
			<LinksGroup
				title="Resources"
				links={['IOS & Android', 'Watch a Demo', 'Customers', 'API']}
			/>
			<div className="email-subscribe">
				<div className="ant-list-header">
					<h5 className="title">Get In Touch</h5>
				</div>
				<Search placeholder="Your Email" enterButton="Subscribe" size="large" />
				<Paragraph className="sub-title">Lore imp sum dolor Amit</Paragraph>
			</div>
		</section>
	);
};
const LinksGroup: React.FC<{ title: string; links: string[] }> = ({
	title,
	links,
}) => {
	return (
		<List
			className="links-list"
			header={<h5 className="title">{title}</h5>}
			dataSource={links}
			renderItem={(item) => (
				<List.Item>
					<Typography.Text>{item}</Typography.Text>
				</List.Item>
			)}
		/>
	);
};

export default FooterLinks;
