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
		const reg = /[\w\[\]=+)(.,><!?:;"'@#$%^&*~`}{]/i;

		if (locationValue.current.value.match(reg) === null) {
			setLocation(() => {
				if (locationValue.current.value.length !== 0) {
					locationValue.current.value =
						locationValue.current.value[0].toUpperCase() +
						locationValue.current.value.slice(1);

					if (
						locationValue.current.value[0] === ' ' ||
						locationValue.current.value[0] === '-'
					) {
						locationValue.current.value = '';
					}

					// let i = locationValue.current.value
					// 	.split('')
					// 	.findIndex((el) => el === ' ');
					// console.log(i);
					// if (locationValue.current.value[i + 1] === ' ') {
					// 	return (
					// 		locationValue.current.value.slice(0, i + 1) +
					// 		locationValue.current.value.slice(i + 2)
					// 	);
					// }
					switch (
						locationValue.current.value[locationValue.current.value.length - 2]
					) {
						case ' ': // enter after space
							if (locationValue.current.value.slice(-1).match(/\s/) === null) {
								return (
									locationValue.current.value.slice(0, -1) +
									locationValue.current.value.slice(-1).toUpperCase()
								);
							}
							return locationValue.current.value.slice(0, -1);

						case '-': // enter after '-'
							if (locationValue.current.value.slice(-1).match(/-/) === null) {
								return (
									locationValue.current.value.slice(0, -1) +
									locationValue.current.value.slice(-1).toUpperCase()
								);
							}
							return locationValue.current.value.slice(0, -1);
					}
					return locationValue.current.value;
				}
				return locationValue.current.value;
			});
		}
	};
	const setNewCheckIn = () => {
		setCheckIn(checkInValue.current.value);
	};
	const setNewNumberOfDays = () => {
		setNumberOfDays(numberOfDaysValue.current.value);
	};

	const onSearch = () => {
		props.setCityNameAC(location);
		props.setCheckInAC(checkIn);
		props.setCheckOutAC(props.dateCheckOut(checkIn, numberOfDays));
	};

	return (
		<div className={`${style.search}`}>
			<div className={`card ${style.card}`}>
				<p className={`${style.subtitle}`}>Локация</p>
				<input
					ref={locationValue}
					className={`input`}
					onChange={setNewLocation}
					value={location}
					type={'text'}
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
					type={'number'}
					min={1}
					max={2913747}
				/>

				<button className={`btn`} onClick={onSearch} type='submit'>
					Найти
				</button>
			</div>
		</div>
	);
};
