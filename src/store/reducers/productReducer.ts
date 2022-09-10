import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

interface Product {
	id: number;
	title: string;
	subTitle: string;
	price: string;
	discount: string;
}

const productsAdapter = createEntityAdapter<Product>({});

const initialState = productsAdapter.getInitialState({
	loading: false,
	sorted: false,
	error: false,
});

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const res = await fetch('/shopItems.json');
		const data = await res.json();
		return data?.items;
	}
);

export const sortProducts = createAsyncThunk(
	'products/sortProducts',
	async (isSorted: boolean) => {
		const res = await fetch('/shopItems.json');
		console.log('sortProducts =======> isSorted', isSorted);
		const data = await res.json();
		const sorted = isSorted ? data?.items : data?.items?.reverse();
		return sorted;
	}
);

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// ********************** fetchProducts **********************
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			productsAdapter.setAll(state, action.payload);
			state.loading = false;
		});
		// ********************** sortProducts **********************
		builder.addCase(sortProducts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(sortProducts.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
		});
		builder.addCase(sortProducts.fulfilled, (state, action) => {
			productsAdapter.setAll(state, action.payload);
			state.loading = false;
			state.sorted = !state.sorted;
		});
	},
});

export default productSlice.reducer;

export const {
	selectAll: selectAllProducts,
	selectById: selectProductById,
	selectIds: selectProductIds,
} = productsAdapter.getSelectors((state: RootState) => state.products);
