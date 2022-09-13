import React, { useRef } from 'react';
import { Layout, Menu, MenuProps, Typography } from 'antd';
import useWidth from '../helpers/hooks/useWidth';
import AuthActions from './header/AuthActions';
import UserActions from './header/UserActions';
import { HamburgerIcon } from '../assets/icons/icons';
import {
	UserOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
	HeartOutlined,
} from '@ant-design/icons';
const { Header } = Layout;

type NavItem = {
	key?: number;
	label: string;
	type: any;
	className?: string;
};

const TopNav: React.FC = () => {
	const { width } = useWidth();
	const headerRef = useRef<HTMLDivElement>(null);
	console.log({ width });
	const navItems = ['home', 'shop', 'about', 'blog', 'contact', 'pages'].map(
		(label: string, key) => ({
			key,
			label,
			type: undefined,
			className: 'nav-item',
		})
	);

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

const CustomDropDown: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
	type MenuItem = Required<MenuProps>['items'][number];

	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: 'group'
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
			type,
		} as MenuItem;
	}
	const items: MenuProps['items'] = [
		getItem('', 'sub1', null, [
			getItem(
				'',
				'g1',
				null,
				[
					...navItems,
					getItem(
						<>
							<UserOutlined />
							Login / Register
						</>,
						'6',
						null
					),
					getItem(<SearchOutlined />, '7', null),
					getItem(<ShoppingCartOutlined />, '8', null),
					getItem(<HeartOutlined />, '9', null),
				],
				'group'
			),
		]),
	];
	const onClick: MenuProps['onClick'] = (e) => {
		console.log('click ', e);
	};
	return (
		<>
			<Menu
				onClick={onClick}
				defaultSelectedKeys={['1']}
				mode="inline"
				items={items}
				className="nav-collapse"
				expandIcon={HamburgerIcon}
			/>
		</>
	);
};

export default TopNav;
