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
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
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
	const { cart, favourite } = useSelector((state: RootState) => state?.user);
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
					getItem(<SearchOutlined />, '7'),
					getItem(
						<>
							<ShoppingCartOutlined /> {cart?.length}
						</>,
						'8'
					),
					getItem(
						<>
							<HeartOutlined /> {favourite?.length}
						</>,
						'9'
					),
				],
				'group'
			),
		]),
	];

	return (
		<>
			<Menu
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
