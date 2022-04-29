import React from 'react';
import FavoritesContainer from './favorites/favoritesContainer';
import SearchContainer from './search/searchContainer';
import style from './sidebar.module.css';

export const Sidebar = (props) => {
	return (
		<div className={`${style.sidebar}`}>
			<SearchContainer />
			<FavoritesContainer favorites={props.favorites} />
		</div>
	);
};
