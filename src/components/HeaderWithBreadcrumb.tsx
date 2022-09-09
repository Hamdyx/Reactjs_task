import { Breadcrumb, PageHeader } from 'antd';
import { BreadcrumbSep } from '../assets/icons/icons';

const HeaderWithBreadcrumb: React.FC = () => {
	return (
		<PageHeader className="site-page-header" title="Shop">
			<Breadcrumb separator={<BreadcrumbSep />}>
				<Breadcrumb.Item href="" className="active">
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item href="">Shop</Breadcrumb.Item>
			</Breadcrumb>
		</PageHeader>
	);
};

export default HeaderWithBreadcrumb;
