import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { createContext, useReducer } from 'react';

const defaultContextValue = {
	todoList: [],
	addNewTodo: value => {
		return value;
	},
	removeTodo: id => {
		return id;
	},
	updateTodo: (id, newValue) => {
		return {
			id,
			newValue,
		};
	},
};

export const TodoContext = createContext(defaultContextValue);

const actionType = {
	ADD_NEW_TODO: 'ADD_NEW_TODO',
	REMOVE_TODO: 'REMOVE_TODO',
	UPDATE_TODO: 'UPDATE_TODO',
	GET_FROM_LOCAL_STORAGE: 'GET_FROM_LOCAL_STORAGE',
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case actionType.GET_FROM_LOCAL_STORAGE:
			return payload;
		case actionType.ADD_NEW_TODO: {
			const newTodoList = [...state, payload];
			localStorage.setItem('todoList', JSON.stringify(newTodoList));
			return newTodoList;
		}
		case actionType.REMOVE_TODO: {
			const newTodoList = state.filter(todo => todo.id !== payload);

			localStorage.setItem('todoList', JSON.stringify(newTodoList));
			return newTodoList;
		}
		case actionType.UPDATE_TODO: {
			const updatedTodo = state.map(todo =>
				todo.id === payload.id
					? { ...todo, title: payload.value }
					: todo
			);
			localStorage.setItem(JSON.stringify('todoList', updatedTodo));
			return updatedTodo;
		}
		default:
			return state;
	}
};

const TodoContextProvider = ({ children }) => {
	useEffect(() => {
		const initialState = JSON.parse(localStorage.getItem('todoList'));
		Array.isArray(initialState)
			? dispatch({
					type: actionType.GET_FROM_LOCAL_STORAGE,
					payload: initialState,
			  })
			: null;
	}, []);

	const [todoList, dispatch] = useReducer(reducer, []);

	const addNewTodo = useCallback((value, bgColor) => {
		const payload = { id: nanoid(), title: value, bgColor };
		return dispatch({ type: actionType.ADD_NEW_TODO, payload });
	}, []);

	const removeTodo = useCallback(id => {
		return dispatch({ type: actionType.REMOVE_TODO, payload: id });
	}, []);

	const updateTodo = useCallback((id, newValue) => {
		const payload = { id, value: newValue };
		return dispatch({ type: actionType.UPDATE_TODO, payload });
	}, []);

	return (
		<TodoContext.Provider
			value={{ todoList, addNewTodo, removeTodo, updateTodo }}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
