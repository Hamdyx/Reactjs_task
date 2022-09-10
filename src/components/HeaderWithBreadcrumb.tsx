import { Breadcrumb, PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';
import { BreadcrumbSep } from '../assets/icons/icons';

const HeaderWithBreadcrumb: React.FC<{ title?: string }> = ({ title = '' }) => {
	return (
		<PageHeader className="site-page-header" title={title}>
			<Breadcrumb separator={<BreadcrumbSep />}>
				<Breadcrumb.Item href="" className="active">
					<NavLink to="/" className="breadcrumb_link">
						Home
					</NavLink>
				</Breadcrumb.Item>
				<Breadcrumb.Item href="">
					<NavLink to="/shop" className="breadcrumb_link">
						Shop
					</NavLink>
				</Breadcrumb.Item>
			</Breadcrumb>
		</PageHeader>
	);
};

export default HeaderWithBreadcrumb;
