import React, { useState, useRef } from 'react';
import { useContext } from 'react';
import { IoMdSend } from 'react-icons/io';
import { TodoContext } from '../../context/Todo.context';

const TodoForm = ({ colorArray }) => {
	const [value, setValue] = useState('');
	const inputRef = useRef();

	const { addNewTodo } = useContext(TodoContext);

	const handleSubmit = e => {
		e.preventDefault();
		if (value.trim() === '' || !value) {
			window.alert("We don't allow empty!");
			setValue('');
			return inputRef.current.focus();
		}

		const bgColor =
			colorArray[Math.floor(Math.random() * colorArray.length)];
		addNewTodo(value, bgColor);
		return setValue('');
	};

	return (
		<div className='todo-form bg-gray-50'>
			<form onSubmit={handleSubmit}>
				<div className='float-right flex flex-row align-center'>
					<div className='input relative w-96 mr-5 '>
						<input
							type='text'
							className='form-input peer'
							placeholder='Add your new todo in here...'
							id='newTodo'
							autoFocus={true}
							value={value}
							onChange={e => setValue(e.target.value)}
							ref={inputRef}
							onSubmit={handleSubmit}
						/>
						<label htmlFor='newTodo' className='form-input-label'>
							Add New Todo
						</label>
					</div>
					<button className='submit-btn' type='submit'>
						Add
						<IoMdSend className='ml-3' />
					</button>
				</div>
				<div className='clear-both py-3'></div>
			</form>
		</div>
	);
};

export default TodoForm;
