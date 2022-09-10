import React from 'react';
import { Button } from 'antd';
import {
	HeartOutlined,
	EyeOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import { RootState, useAppDispatch } from '../store/configureStore';
import {
	addToCart,
	addToFavourite,
	addToWatchlist,
	removeFromCart,
	removeFromFavourite,
	removeFromWatchlist,
} from '../store/reducers/userReducer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ItemActions: React.FC = () => {
	const dispatch = useAppDispatch();
	let { id } = useParams();
	const Incart = useSelector((state: RootState) =>
		state?.user.cart?.includes(id)
	);
	const InFavourite = useSelector((state: RootState) =>
		state?.user.favourite?.includes(id)
	);
	const InWatchlist = useSelector((state: RootState) =>
		state?.user.watchlist?.includes(id)
	);
	const handleCartBtn = () => {
		if (Incart) dispatch(removeFromCart(id));
		else dispatch(addToCart(id));
	};
	const handleFavouriteBtn = () => {
		if (InFavourite) dispatch(removeFromFavourite(id));
		else dispatch(addToFavourite(id));
	};
	const handleWatchlistBtn = () => {
		if (InWatchlist) dispatch(removeFromWatchlist(id));
		else dispatch(addToWatchlist(id));
	};
	return (
		<div className="item_actions">
			<Button
				type="primary"
				className={`filter_button ${Incart ? 'selected' : ''}`}
				onClick={handleCartBtn}
			>
				{Incart ? 'Remove From Cart' : 'Add To Cart'}
			</Button>
			<Button
				className={`action_button ${InFavourite ? 'selected' : ''}`}
				onClick={handleFavouriteBtn}
			>
				<HeartOutlined />
			</Button>
			<Button
				className={`action_button ${Incart ? 'selected' : ''}`}
				onClick={handleCartBtn}
			>
				<ShoppingCartOutlined />
			</Button>
			<Button
				className={`action_button ${InWatchlist ? 'selected' : ''}`}
				onClick={handleWatchlistBtn}
			>
				<EyeOutlined />
			</Button>
		</div>
	);
};

export default ItemActions;
