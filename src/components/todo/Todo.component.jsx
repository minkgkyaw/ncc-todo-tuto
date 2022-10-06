import React from 'react';
import { useContext } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { TodoContext } from '../../context/Todo.context';

const TodoItem = ({ title, id, bgColor }) => {
	const { removeTodo, updateTodo } = useContext(TodoContext);
	const onEditHandler = () => {
		const newTitle = window.prompt('Do you want to edi todo?', title);
		if (newTitle === '') return;
		return updateTodo(id, newTitle);
	};

	return (
		<div className={`todo-item ${bgColor}`}>
			<p className='todo-text'>{title}</p>
			<div className='todo-action'>
				<button
					className='text-2xl text-yellow-500 mt-2'
					onClick={onEditHandler}
				>
					<FiEdit />
				</button>
				<button
					className='text-2xl text-rose-500 mt-2'
					onClick={() => removeTodo(id)}
				>
					<FiTrash2 />
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
