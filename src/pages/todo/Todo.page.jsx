import React from 'react';
import { TodoForm, TodoList } from '../../components';

const TodoPage = () => {
	const colorArray = [
		'purple-color',
		'rose-color',
		'emerald-color',
		'slate-color',
		'teal-color',
		'sky-color',
		'violet-color',
		'fuchsia-color',
		'pink-color',
		'blue-color',
		'orange-color',
	];

	return (
		<div className='todo-page'>
			<TodoForm colorArray={colorArray} />
			<TodoList />
		</div>
	);
};

export default TodoPage;
