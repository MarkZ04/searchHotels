import React from 'react';
import style from './content.module.css';
import { HotelCard } from './hotelCard';
import hotelImg from '../../../../img/hotel.svg';

export const Content = (props) => {
	let hotelsList = props.hotels.map((hotel, i) => {
		return (
			<div key={i} className={style.hotelCardContainer}>
				<div className={`${style.imgBox}`}>
					<img src={hotelImg} width='35px' height='35px' alt='hotel' />
				</div>

				<HotelCard
					key={hotel.hotelId}
					hotelName={hotel.hotelName}
					hotelId={hotel.hotelId}
					stars={hotel.stars}
					checkIn={props.checkIn}
					price={hotel.priceFrom}
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
		<div className={`card ${style.content}`}>
			<div className={style.header}>
				<nav className={` ${style.navigation}`}>
					<p className={`title ${style.title}`}>Отели</p>
					<p className={`title ${style.title}`}>{props.cityName}</p>
				</nav>

				<p className={style.checkIn}>{props.checkIn}</p>
			</div>

			{/* <div>Img</div> */}

			<p>Отелей в избранном: {props.favorites.length}</p>

			<div className={`${style.hotelsList}`}>{hotelsList}</div>
		</div>
	);
};
