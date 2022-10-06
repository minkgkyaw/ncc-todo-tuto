import React from 'react';
import './App.css';
import { Container } from './components';
import TodoContextProvider from './context/Todo.context';
import { TodoPage } from './pages';

const App = () => {
	return (
		<div className='App'>
			<Container>
				<TodoContextProvider>
					<TodoPage />
				</TodoContextProvider>
			</Container>
		</div>
	);
};

export default App;
