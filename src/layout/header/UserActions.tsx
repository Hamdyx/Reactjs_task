import React from 'react';
import {
	SearchOutlined,
	ShoppingCartOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import UserActionItem from './UserActionItem';
const { Paragraph } = Typography;

const UserActions: React.FC = () => {
	const { cart, favourite } = useSelector((state: RootState) => state?.user);
	return (
		<div className="actions">
			<Paragraph className="item">
				<UserActionItem Icon={SearchOutlined} />
			</Paragraph>
			<Paragraph className="item">
				<UserActionItem Icon={ShoppingCartOutlined} text={cart?.length} />
			</Paragraph>
			<Paragraph className="item">
				<UserActionItem Icon={HeartOutlined} text={favourite?.length} />
			</Paragraph>
		</div>
	);
};

export default UserActions;
