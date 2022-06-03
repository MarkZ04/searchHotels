import React from 'react';
import { useState, useRef } from 'react';
import style from './search.module.css';

export const Search = (props) => {
	let locationValue = useRef(null);
	let checkInValue = useRef(null);
	let numberOfDaysValue = useRef(null);

	let [location, setLocation] = useState('Москва');
	let [checkIn, setCheckIn] = useState(props.today());
	let [numberOfDays, setNumberOfDays] = useState(1);

	const setNewLocation = () => {
		setLocation(locationValue.current.value);
	};

	const setNewCheckIn = () => {
		setCheckIn(checkInValue.current.value);
	};

	const setNewNumberOfDays = () => {
		setNumberOfDays(numberOfDaysValue.current.value);
	};

	const onSearch = () => {
		console.log(location); // исправить заглавную букву
		let cityName = location[0].toUpperCase() + location.slice(1).toLowerCase();

		props.setCityNameAC(cityName);
		props.setCheckInAC(checkIn);
		props.setCheckOutAC(props.dateCheckOut(checkIn, numberOfDays));
	};

	return (
		<div className={`${style.search}`}>
			<form action='#' className={`card ${style.card}`}>
				<p className={`${style.subtitle}`}>Локация</p>
				<input
					ref={locationValue}
					className={`input`}
					onChange={setNewLocation}
					value={location}
				/>

				<p className={`${style.subtitle}`}>Дата заселения</p>
				<input
					ref={checkInValue}
					className={`input`}
					onChange={setNewCheckIn}
					value={checkIn}
					type='date'
				/>

				<p className={`${style.subtitle}`}>Количество дней</p>
				<input
					ref={numberOfDaysValue}
					className={`input`}
					onChange={setNewNumberOfDays}
					value={numberOfDays}
				/>

				<button className={`btn`} onClick={onSearch} type='submit'>
					Найти
				</button>
			</form>
		</div>
	);
};
