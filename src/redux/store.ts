import { configureStore } from '@reduxjs/toolkit';
import todoReducers from './reducers/todoReducers';

export const store = configureStore({
	reducer: {
		todo: todoReducers,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
