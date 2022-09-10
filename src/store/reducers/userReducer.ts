import { createSlice } from '@reduxjs/toolkit';

interface SliceState {
	cart: any[] | null;
	favourite: any[] | null;
	watchlist: any[] | null;
	loading: boolean;
}

const initialState: SliceState = {
	cart: null,
	favourite: null,
	watchlist: null,
	loading: false,
};
const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart = state.cart
				? [...state.cart, ...action.payload]
				: [action.payload];
		},
		removeFromCart: (state, action) => {
			state.cart = state!.cart!.filter((item) => item !== action.payload);
		},
		addToFavourite: (state, action) => {
			state.favourite = state.favourite
				? [...state.favourite, ...action.payload]
				: [action.payload];
		},
		removeFromFavourite: (state, action) => {
			state.favourite = state!.favourite!.filter(
				(item) => item !== action.payload
			);
		},
		addToWatchlist: (state, action) => {
			state.watchlist = state!.watchlist
				? [...state.watchlist, ...action.payload]
				: [action.payload];
		},
		removeFromWatchlist: (state, action) => {
			state.watchlist = state!.watchlist!.filter(
				(item) => item !== action.payload
			);
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	addToFavourite,
	removeFromFavourite,
	addToWatchlist,
	removeFromWatchlist,
} = slice.actions;

export default slice.reducer;
