import React from 'react';
import { Menu, MenuProps } from 'antd';
import { HamburgerIcon } from '../../assets/icons/icons';
import {
	UserOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import UserActionItem from './../header/UserActionItem';
import { NavItem } from '../../content/fields';

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
						<UserActionItem Icon={UserOutlined} text={'Login / Register'} />,
						'6'
					),

					getItem(<UserActionItem Icon={SearchOutlined} />, '7'),
					getItem(
						<UserActionItem Icon={ShoppingCartOutlined} text={cart?.length} />,
						'8'
					),
					getItem(
						<UserActionItem Icon={HeartOutlined} text={favourite?.length} />,
						'9'
					),
				],
				'group'
			),
		]),
	];

	return (
		<Menu
			defaultSelectedKeys={['1']}
			mode="inline"
			items={items}
			className="nav-collapse"
			expandIcon={HamburgerIcon}
		/>
	);
};
export default CustomDropDown;
