import { createSlice } from '@reduxjs/toolkit';
import { ITodoList } from '../../models/todosInterfaces';

const initialState: ITodoList = {
	todos: [],
};

const todoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const { title } = action.payload;
			state.todos.push(action.payload);
			localStorage.setItem(title, JSON.stringify(action.payload));
		},
		toggleTodo: (state, action) => {
			const checkedTodo = state.todos.find(
				(todo) => todo.id === action.payload
			);
			if (checkedTodo) {
				checkedTodo.completed = !checkedTodo?.completed;
			}
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => {
				return todo.id !== action.payload;
			});
		},
		editTodo: (state, action) => {
			const findTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
		},
	},
});
export const { addTodo, toggleTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
