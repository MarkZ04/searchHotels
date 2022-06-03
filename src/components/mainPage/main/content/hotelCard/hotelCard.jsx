import React from 'react';
import style from './hotelCard.module.css';

export const HotelCard = (props) => {
	let starsColor = [];
	for (let i = 0; i < 5; i++) {
		while (i < props.stars) {
			starsColor.push('gold');
			i++;
		}
		if (i < 5) starsColor.push('grey');
	}

	let stars = starsColor.map((cl, i) =>
		cl === 'gold' ? (
			<div key={i} className={`${style.starGold} ${style.star}`}></div>
		) : (
			<div key={i} className={`${style.starGrey} ${style.star}`}></div>
		)
	);

	const changeStatus = () => {
		props.toggleIsFavoritesAC(props.hotelId, !props.isFavorites);

		props.setFavoritesAC({
			hotelName: props.hotelName,
			hotelId: props.hotelId,
			checkIn: props.checkIn,
			stars: props.stars,
			price: props.price,
			isFavorites: !props.isFavorites,
		});
		props.sortFavoritesAC(
			props.sortFavorites.sortMethod,
			props.sortFavorites.sortAscending
		);
	};

	return (
		<div className={`${style.container}`}>
			<div className={`${style.colLeft}`}>
				<p className={`subTitle`}>{props.hotelName}</p>

				<p className={style.checkIn}>{props.checkIn}</p>

				<div className={style.starsContainer}>{stars}</div>
			</div>

			<div className={`${style.colRight}`}>
				{props.isFavorites ? (
					<div className={`${style.likeActive}`} onClick={changeStatus}></div>
				) : (
					<div className={`${style.like}`} onClick={changeStatus}></div>
				)}

				<div>
					<span className={style.price}>Prise:</span> {props.price} &#8381;
				</div>
			</div>
		</div>
	);
};
