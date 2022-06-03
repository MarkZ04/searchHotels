import React from 'react';
import { useRef, useState } from 'react';
import style from './sort.module.css';

export const Sort = (props) => {
	const sortStars = useRef(null);
	const sortPrice = useRef(null);
	// const [sortAscendingStars, setSortAscendingStars] = useState(null);
	// const [sortAscendingPrice, setSortAscendingPrice] = useState(null);

	let sortFavorites = (sortMethod, e) => {
		if (e.target.id === props.sortFavorites.sortMethod) {
			if (props.sortFavorites.sortAscending === true) {
				e.target.classList.toggle(`${style.activeAscending}`);
				e.target.classList.toggle(`${style.activeDescending}`);
				props.setSortFavoritesAC(sortMethod, false);
				props.sortFavoritesAC(sortMethod, false);
				return;
			}

			e.target.classList.toggle(`${style.activeAscending}`);
			e.target.classList.toggle(`${style.activeDescending}`);
			props.setSortFavoritesAC(sortMethod, true);
			props.sortFavoritesAC(sortMethod, true);
			return;
		}

		switch (e.target.id) {
			case 'Stars':
				sortPrice.current.classList = [`${style.sort}`];
				e.target.classList.toggle(`${style.activeAscending}`);
				props.setSortFavoritesAC(sortMethod, true);
				props.sortFavoritesAC(sortMethod, true);
				break;

			case 'Price':
				sortStars.current.classList = [`${style.sort}`];
				e.target.classList.toggle(`${style.activeAscending}`);
				props.setSortFavoritesAC(sortMethod, true);
				props.sortFavoritesAC(sortMethod, true);
				break;
		}
	};

	return (
		<div className={`${style.container}`}>
			<span
				ref={sortStars}
				id={'Stars'}
				className={`${style.sort} ${style.activeAscending}`}
				onClick={(e) => sortFavorites('Stars', e)}>
				Рейтинг
			</span>

			<span
				ref={sortPrice}
				id={'Price'}
				className={`${style.sort}`}
				onClick={(e) => sortFavorites('Price', e)}>
				Цена
			</span>
		</div>
	);
};
