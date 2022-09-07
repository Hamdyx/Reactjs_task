import React from 'react';
import {
	UserOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';

const { Paragraph } = Typography;
const { Header } = Layout;

const TopNav: React.FC = () => {
	const navItems = ['home', 'shop', 'about', 'blog', 'contact', 'pages'].map(
		(key) => ({
			key,
			label: `${key}`,
			className: 'nav-items',
		})
	);
	return (
		<Header className="header">
			<Typography.Title level={3} className="logo">
				Bandage
			</Typography.Title>
			<Menu
				theme="light"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				items={navItems}
			/>
			<div className="authenticate">
				<Paragraph className="login">
					<UserOutlined />
					Login
				</Paragraph>
				<Paragraph>/</Paragraph>
				<Paragraph>Register</Paragraph>
			</div>
			<div className="actions">
				<Paragraph className="item">
					<SearchOutlined />
				</Paragraph>
				<Paragraph className="item">
					<ShoppingCartOutlined />
				</Paragraph>
				<Paragraph className="item">
					<HeartOutlined />
				</Paragraph>
			</div>
		</Header>
	);
};

export default TopNav;
