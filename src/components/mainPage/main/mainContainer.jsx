import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Main } from './main';
import { getHotelsTC } from '../../../redux/reducers/mainReducer';

const MainContainer = (props) => {
	useEffect(() => {
		props.getHotelsTC(props.cityName, props.checkIn, props.checkOut);
	}, [props.cityName, props.checkIn, props.checkOut]);

	return <Main favorites={props.favorites} />;
};

const mapStateToProps = (state) => {
	return {
		cityName: state.mainPage.cityName,
		checkIn: state.mainPage.checkIn,
		checkOut: state.mainPage.checkOut,
		favorites: state.mainPage.favorites,
	};
};

export default compose(
	connect(mapStateToProps, {
		getHotelsTC,
	})
)(MainContainer);
