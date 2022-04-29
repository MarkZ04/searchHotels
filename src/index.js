import './index.css';
import { store } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login } from './components/login';
import { MainPage } from './components/mainPage/mainPage';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					{false ? (
						<Route path='/login' element={<Login />} />
					) : (
						<Route path='/main' element={<MainPage />} />
					)}
				</Routes>
				<></>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
