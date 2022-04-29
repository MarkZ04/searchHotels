import React from 'react';
import { connect } from 'react-redux';
import { Login } from '../components/login';

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export const withAuthRedirect = (Component) => {
	let redirectContainerComponent = (props) => {
		if (!props.isAuth) return <Login />;

		return <Component {...props} />;
	};

	let connectRedirectContainerComponent = connect(mapStateToProps)(
		redirectContainerComponent
	);

	return connectRedirectContainerComponent;
};
