import React from 'react';
import moment from 'moment';
import Avatar from '../../svg/avatar.svg';
import List_Logo from '../../svg/list.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
	const [name, setName] = useState(localStorage.getItem('userName'));

	useEffect(() => {
		if (name === null || name === undefined) {
			const newName = prompt('Please enter your name', '');
			setName(newName);
			alert(
				'you can change your name by double click one Name or image icon'
			);
			return localStorage.setItem('userName', name);
		}
	}, []);

	const changeName = () => {
		const newName = prompt('Update new name', name);
		if (newName !== '' || newName !== null) {
			setName(newName);
			return localStorage.setItem('userName', newName);
		}
	};
	return (
		<div className='Header'>
			<div className='Sub-header-group'>
				<div className='Logo w-12 h-12'>
					<img className='w-full h-full' src={List_Logo} alt='' />
				</div>
				<p className='Sub-Title'>{moment().format('DD-MMM-YY')}</p>
			</div>
			<p className='Title'>NCC/Todo App</p>
			<div className='Sub-header-group '>
				<div className='avatar w-9 h-9 bg-gray-400 rounded-full'>
					<img
						onDoubleClick={changeName}
						className='w-full h-full'
						src={Avatar}
						alt=''
					/>
				</div>
				<p
					className='Sub-Title cursor-pointer'
					onDoubleClick={changeName}
				>
					{name}
				</p>
			</div>
		</div>
	);
};

export default Header;
