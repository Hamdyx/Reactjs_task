import React, { useRef } from 'react';
import { Layout, Menu, Typography } from 'antd';
import useWidth from '../helpers/hooks/useWidth';
import AuthActions from './header/AuthActions';
import UserActions from './header/UserActions';
import CustomDropDown from './header/CustomDropDown';
import { navLinks } from '../content/fields';
const { Header } = Layout;

const TopNav: React.FC = () => {
	const { width } = useWidth();
	const headerRef = useRef<HTMLDivElement>(null);
	const navItems = navLinks.map((label: string, key) => ({
		key,
		label,
		type: undefined,
		className: 'nav-item',
	}));

	return (
		<Header className="header" ref={headerRef}>
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
					<CustomDropDown navItems={navItems} />
				</>
			)}
		</Header>
	);
};

export default TopNav;
