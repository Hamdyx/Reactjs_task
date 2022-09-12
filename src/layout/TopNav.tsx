import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import useWidth from '../helpers/hooks/useWidth';
import AuthActions from './header/AuthActions';
import UserActions from './header/UserActions';
import NavRoutes from './header/NavRoutes';
const { Header } = Layout;

const TopNav: React.FC = () => {
	const { width } = useWidth();
	console.log({ width });
	const navItems = ['home', 'shop', 'about', 'blog', 'contact', 'pages'].map(
		(label, key) => ({
			key,
			label,
			className: 'nav-items',
		})
	);

	return (
		<Header className="header">
			<Typography.Title level={3} className="logo">
				Bandage
			</Typography.Title>

			{width > 768 ? (
				<>
					<Menu
						theme="light"
						mode="horizontal"
						defaultSelectedKeys={['1']}
						items={navItems}
					/>
					<AuthActions />
					<UserActions />
				</>
			) : (
				<>
					<NavRoutes navItems={navItems} /> <AuthActions />
					<UserActions />
				</>
			)}
		</Header>
	);
};

export default TopNav;
