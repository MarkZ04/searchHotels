import React from 'react';
import { connect } from 'react-redux';
import { Favorites } from './favorites';
import {
	toggleIsFavoritesAC,
	setFavoritesAC,
} from '../../../../../redux/reducers/mainReducer';

const FavoritesContainer = (props) => {
	return <Favorites {...props} />;
};

const mapStateToProps = (state) => {
	return {
		favorites: state.mainPage.favorites,
	};
};

export default connect(mapStateToProps, {
	toggleIsFavoritesAC,
	setFavoritesAC,
})(FavoritesContainer);
