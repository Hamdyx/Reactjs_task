import React from 'react';
import { NavLink } from 'react-router-dom';

type Item = {
	key?: any;
	label: any;
	className?: any;
};

const NavRoutes: React.FC<{ navItems: Item[] }> = ({ navItems }) => {
	const navElements = navItems.map((item, i: number) => (
		<NavLink to="/" key={i} className={item.className}>
			{item.label}
		</NavLink>
	));

	return <>{navElements}</>;
};

export default NavRoutes;
