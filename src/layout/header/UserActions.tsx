import React from 'react';
import {
	SearchOutlined,
	ShoppingCartOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
const { Paragraph } = Typography;

const UserActions: React.FC = () => {
	const { cart, favourite } = useSelector((state: RootState) => state?.user);
	return (
		<div className="actions">
			<Paragraph className="item">
				<SearchOutlined />
			</Paragraph>
			<Paragraph className="item">
				<ShoppingCartOutlined />
				{cart?.length}
			</Paragraph>
			<Paragraph className="item">
				<HeartOutlined />
				{favourite?.length}
			</Paragraph>
		</div>
	);
};

export default UserActions;
