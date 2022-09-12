import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

const sortByName = (a: Product, b: Product, isSorted: boolean) =>
	isSorted
		? b.title.charCodeAt(0) - a.title.charCodeAt(0)
		: a.title.charCodeAt(0) - b.title.charCodeAt(0);
const sortByPrice = (a: Product, b: Product, isSorted: boolean) => {
	const priceA = parseFloat(a.price.slice(1));
	const priceB = parseFloat(b.price.slice(1));
	return isSorted ? priceB - priceA : priceA - priceB;
};
interface Product {
	id: number;
	img: number;
	title: string;
	subTitle: string;
	price: string;
	discount: string;
}

const productsAdapter = createEntityAdapter<Product>({
	selectId: (product: Product) => `${product.title}-${product.id}`,
});

interface StateSlice {
	searchPattern: string;
	filteredIds: any[];
	loading: boolean;
	sorted: boolean;
	error: boolean;
}

const initialState = productsAdapter.getInitialState<StateSlice>({
	searchPattern: '',
	filteredIds: [],
	loading: false,
	sorted: false,
	error: false,
});

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const res = await fetch('/shopItems.json');
		const data = await res.json();
		const dataItems = data?.items;
		const itemsList: any = [];
		for (let i = 1; i <= 36; i++) {
			const item = { ...dataItems };
			const randPrefix = Math.floor(Math.random() * 26);
			const randChar = String.fromCharCode(randPrefix + 97);
			const price = item.price.slice(1);
			const randPrice = parseFloat(price) + Math.floor(Math.random() * 100);
			item.id = i;
			item.title = `${randChar}-`.concat(item?.title);
			item.price = `$${randPrice.toFixed(2)}`;
			item.img = Math.ceil(Math.random() * 12);
			itemsList.push(item);
		}
		return itemsList;
	}
);
const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		searchProducts(state, action) {
			const pattern = action.payload;
			state.searchPattern = pattern;
		},
		sortProducts(state, action) {
			const { allProduct, sortProp } = action.payload;
			const sortedArr = allProduct;
			console.log('sortProducts ========> state.sorted', state.sorted);
			if (sortProp === 'price')
				sortedArr.sort((a: Product, b: Product) =>
					sortByPrice(a, b, state.sorted)
				);
			else
				sortedArr.sort((a: Product, b: Product) =>
					sortByName(a, b, state.sorted)
				);
			productsAdapter.setAll(state, sortedArr);
			state.sorted = !state.sorted;
		},
	},
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
	},
});

export default productSlice.reducer;
export const { searchProducts, sortProducts } = productSlice.actions;

export const {
	selectAll: selectAllProducts,
	selectById: selectProductById,
	selectIds: selectProductIds,
} = productsAdapter.getSelectors((state: RootState) => state.products);
