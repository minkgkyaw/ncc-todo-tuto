import React from 'react';
import TodoItem from './Todo.component';
import { Skeleton } from '../';
import { useContext } from 'react';
import { TodoContext } from '../../context/Todo.context';

const TodoList = () => {
	const { todoList } = useContext(TodoContext);

	return (
		<div className='todo-list'>
			{todoList.length !== 0 ? (
				todoList.map(({ id, title, bgColor }) => (
					<TodoItem
						key={id}
						id={id}
						title={title}
						bgColor={bgColor}
					/>
				))
			) : (
				<Skeleton />
			)}
		</div>
	);
};

export default TodoList;
