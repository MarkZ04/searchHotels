import { hotelsApi } from '../../api';

const SET_HOTELS_LIST = 'SET_HOTELS_LIST';
const SET_CITY_NAME = 'SET_CITY_NAME';
const SET_CHECK_IN = 'SET_CHECK_IN';
const SET_CHECK_OUT = 'SET_CHECK_OUT';
const TOGGLE_IS_FAVORITES = 'TOGGLE_IS_FAVORITES';
const SET_FAVORITES = 'SET_FAVORITES';
const SET_SORT_FAVORITES = 'SET_SORT_FAVORITES';
const SORT_FAVORITES = 'SORT_FAVORITES';

export const today = () => {
	let date = new Date().toLocaleDateString();
	return date.split('.').reverse().join('-');
};
export const dateCheckOut = (dateChickIn, days = 1) => {
	let date = new Date(dateChickIn);
	date.setDate(date.getDate() + +days);
	return date.toLocaleDateString().split('.').reverse().join('-');
};

const initialState = {
	cityName: 'Москва',
	hotels: [],
	checkIn: today(),
	checkOut: dateCheckOut(today()),
	favorites: [],
	sortFavorites: { sortMethod: 'Stars', sortAscending: true },
};

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_HOTELS_LIST:
			return {
				...state,
				hotels: action.hotels,
			};

		case SET_CITY_NAME:
			return {
				...state,
				cityName: action.cityName,
			};

		case SET_CHECK_IN:
			return {
				...state,
				checkIn: action.checkIn,
			};

		case SET_CHECK_OUT:
			return {
				...state,
				checkOut: action.checkOut,
			};

		case TOGGLE_IS_FAVORITES:
			return {
				...state,
				hotels: [...state.hotels].map((h) => {
					if (h.hotelId === action.hotelId) h.isFavorites = action.bool;
					return h;
				}),
			};

		case SET_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites].find(
					(h) => h.hotelId === action.hotel.hotelId
				)
					? [...state.favorites].filter(
							(h) => h.hotelId !== action.hotel.hotelId
					  )
					: [...state.favorites, action.hotel],
			};

		case SET_SORT_FAVORITES:
			return {
				...state,
				sortFavorites: {
					...state.sortFavorites,
					sortMethod: action.sortMethod,
					sortAscending: action.sortAscending,
				},
			};

		case SORT_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites].sort((h1, h2) => {
					switch (action.sortMethod) {
						case 'Stars':
							if (action.sortAscending) {
								return h1.stars - h2.stars;
							}
							return h2.stars - h1.stars;

						case 'Price':
							if (action.sortAscending) {
								return h1.price - h2.price;
							}
							return h2.price - h1.price;
					}
				}),
			};
		default:
			return state;
	}
};

// Action Creators
const setHotelsListAC = (hotels) => ({ type: SET_HOTELS_LIST, hotels });
export const setCityNameAC = (cityName) => ({ type: SET_CITY_NAME, cityName });
export const setCheckInAC = (checkIn) => ({ type: SET_CHECK_IN, checkIn });
export const setCheckOutAC = (checkOut) => ({ type: SET_CHECK_OUT, checkOut });
export const toggleIsFavoritesAC = (hotelId, bool) => ({
	type: TOGGLE_IS_FAVORITES,
	hotelId,
	bool,
});
export const setFavoritesAC = (hotel) => ({ type: SET_FAVORITES, hotel });
export const setSortFavoritesAC = (sortMethod, sortAscending) => ({
	type: SET_SORT_FAVORITES,
	sortMethod,
	sortAscending,
});
export const sortFavoritesAC = (sortMethod, sortAscending) => ({
	type: SORT_FAVORITES,
	sortMethod,
	sortAscending,
});

// Thunk Creators
export const getHotelsTC = (cityName, checkIn, checkOut) => {
	return (dispatch) => {
		hotelsApi.getHotels(cityName, checkIn, checkOut).then((hotels) => {
			if (hotels === undefined) {
				dispatch(setHotelsListAC(['Error']));
				return;
			}

			hotels.forEach((h) => (h.isFavorites = false));
			dispatch(setHotelsListAC(hotels));
		});
	};
};
