import React from 'react';
import { Header } from './header';
import MainContainer from './main/mainContainer';
import style from './mainPage.module.css';

export const MainPage = (props) => {
	return (
		<div className={style.mainPage}>
			<Header />
			<MainContainer />
		</div>
	);
};
