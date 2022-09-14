import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import UserActionItem from './UserActionItem';
const { Paragraph } = Typography;

const AuthActions: React.FC = () => {
	return (
		<div className="authenticate">
			<Paragraph className="login">
				<UserActionItem Icon={UserOutlined} text={'Login'} />
			</Paragraph>
			<Paragraph>/</Paragraph>
			<Paragraph>
				<UserActionItem text={'Register'} />
			</Paragraph>
		</div>
	);
};

export default AuthActions;
