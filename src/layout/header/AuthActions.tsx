import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Paragraph } = Typography;

const AuthActions: React.FC = () => {
	return (
		<div className="authenticate">
			<Paragraph className="login">
				<UserOutlined />
				Login
			</Paragraph>
			<Paragraph>/</Paragraph>
			<Paragraph>Register</Paragraph>
		</div>
	);
};

export default AuthActions;
