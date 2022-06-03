import React from 'react';
import { connect } from 'react-redux';
import { Content } from './content';
import {
	toggleIsFavoritesAC,
	setFavoritesAC,
	sortFavoritesAC,
} from '../../../../redux/reducers/mainReducer';

const ContentContainer = (props) => {
	return <Content {...props} />;
};

const mapStateToProps = (state) => {
	return {
		cityName: state.mainPage.cityName,
		checkIn: state.mainPage.checkIn.split('-').reverse().join('.'),
		hotels: state.mainPage.hotels,
		favorites: state.mainPage.favorites,
		sortFavorites: state.mainPage.sortFavorites,
	};
};

export default connect(mapStateToProps, {
	toggleIsFavoritesAC,
	setFavoritesAC,
	sortFavoritesAC,
})(ContentContainer);
