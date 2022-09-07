import React from 'react';
import logo from './logo.svg';
import { Layout, Menu, Typography } from 'antd';

const { Header } = Layout;

function App() {
	const items1 = ['home', 'shop', 'about', 'blog', 'contact', 'pages'].map(
		(key) => ({
			key,
			label: `${key}`,
		})
	);
	return (
		<Layout>
			<Header className="header">
				<Typography.Title level={2} className="logo">
					Bandage
				</Typography.Title>
				<Menu
					theme="light"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					items={items1}
				/>
			</Header>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</Layout>
	);
}

export default App;
