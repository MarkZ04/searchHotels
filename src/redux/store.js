import { applyMiddleware, combineReducers, createStore } from 'redux';
import { mainReducer } from './reducers/mainReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	mainPage: mainReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
