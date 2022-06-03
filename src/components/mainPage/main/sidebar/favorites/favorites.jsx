import React from 'react';
import style from './favorites.module.css';
import { HotelCard } from '../../content/hotelCard';
import { Sort } from './sort';

export const Favorites = (props) => {
	let favorites = props.favorites.map((hotel, i) => {
		return (
			<div key={i} className={style.hotelCardContainer}>
				<HotelCard
					key={hotel.hotelId}
					hotelName={hotel.hotelName}
					hotelId={hotel.hotelId}
					stars={hotel.stars}
					checkIn={hotel.checkIn}
					price={hotel.price}
					isFavorites={hotel.isFavorites}
					toggleIsFavoritesAC={props.toggleIsFavoritesAC}
					setFavoritesAC={props.setFavoritesAC}
					sortFavoritesAC={props.sortFavoritesAC}
					sortFavorites={props.sortFavorites}
				/>
			</div>
		);
	});

	return (
		<div className={`card ${style.card}`}>
			<div className={`title ${style.title}`}>Избранное</div>

			<Sort
				sortFavorites={props.sortFavorites}
				setSortFavoritesAC={props.setSortFavoritesAC}
				sortFavoritesAC={props.sortFavoritesAC}
			/>

			<div className={style.hotelsList}>{favorites}</div>
		</div>
	);
};
