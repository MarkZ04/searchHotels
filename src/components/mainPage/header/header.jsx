import React from 'react';
import style from './header.module.css';

export const Header = (props) => {
	return (
		<header className={style.header}>
			<p className={`title ${style.text}`}>Simple Hotel Check</p>
			<p className={style.logOut}>Выйти</p>
		</header>
	);
};
