import React from 'react';
import { connect } from 'react-redux';
import { Favorites } from './favorites';
import {
	toggleIsFavoritesAC,
	setFavoritesAC,
	setSortFavoritesAC,
	sortFavoritesAC,
} from '../../../../../redux/reducers/mainReducer';

const FavoritesContainer = (props) => {
	if (props.favorites.length !== 0) {
		return <Favorites {...props} />;
	}
	return null;
};

const mapStateToProps = (state) => {
	return {
		favorites: state.mainPage.favorites,
		sortFavorites: state.mainPage.sortFavorites,
	};
};

export default connect(mapStateToProps, {
	toggleIsFavoritesAC,
	setFavoritesAC,
	setSortFavoritesAC,
	sortFavoritesAC,
})(FavoritesContainer);
