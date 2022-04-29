import React from 'react';
import ContentContainer from './content/contentContainer';
import style from './main.module.css';
import { Sidebar } from './sidebar';

export const Main = (props) => {
	return (
		<main className={style.wrapper}>
			<Sidebar favorites={props.favorites} />
			<ContentContainer />
		</main>
	);
};
