import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://engine.hotellook.com/api/v2',
	origin: 'http://localhost:3000',
	credentials: true,
});

export const hotelsApi = {
	getHotels(cityName, checkIn, checkOut) {
		return instance
			.get(
				`cache.json?location=${cityName}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
			)
			.then((response) => {
				return response.data;
			});
	},
};
