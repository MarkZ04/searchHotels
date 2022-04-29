import React from 'react';
import style from './favorites.module.css';
import { HotelCard } from '../../content/hotelCard';

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
				/>
			</div>
		);
	});

	return (
		<div className={`card ${style.card}`}>
			<div className={`title ${style.title}`}>Избранное</div>

			<div className={style.hotelsList}>{favorites}</div>
		</div>
	);
};
