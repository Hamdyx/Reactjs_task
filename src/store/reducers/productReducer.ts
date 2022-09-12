import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

const sortByName = (a: Product, b: Product) =>
	a.title.charCodeAt(0) - b.title.charCodeAt(0);
const sortByPrice = (a: Product, b: Product) => {
	const priceA = parseFloat(a.price.slice(1));
	const priceB = parseFloat(b.price.slice(1));
	return priceA - priceB;
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
	sortComparer: sortByName,
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

export const sortProducts = createAsyncThunk<
	Product[],
	{ allProduct: Product[]; sortProp: string }
>('products/sortProducts', async ({ allProduct, sortProp }) => {
	const sortedArr = allProduct;
	if (sortProp === 'price') sortedArr.sort(sortByPrice);
	else sortedArr.sort(sortByName);
	return sortedArr;
});

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		searchProducts(state, action) {
			const pattern = action.payload;
			state.searchPattern = pattern;
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
export const { searchProducts } = productSlice.actions;

export const {
	selectAll: selectAllProducts,
	selectById: selectProductById,
	selectIds: selectProductIds,
} = productsAdapter.getSelectors((state: RootState) => state.products);
