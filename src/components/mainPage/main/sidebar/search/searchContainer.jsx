import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Search } from './search';
import {
	setCityNameAC,
	setCheckInAC,
	setCheckOutAC,
	today,
	dateCheckOut,
} from '../../../../../redux/reducers/mainReducer';

const SearchContainer = (props) => {
	return <Search {...props} today={today} dateCheckOut={dateCheckOut} />;
};

const mapStateToProps = (state) => {
	return {
		cityName: state.mainPage.cityName,
		checkIn: state.mainPage.checkIn,
		checkOut: state.mainPage.checkOut,
	};
};

export default compose(
	connect(mapStateToProps, {
		setCityNameAC,
		setCheckInAC,
		setCheckOutAC,
	})
)(SearchContainer);
