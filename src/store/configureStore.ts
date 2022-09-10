import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
	user: userReducer,
	products: productReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof rootReducer>;

export default store;
