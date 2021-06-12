import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
	authenticated: '',
	errorMessage: '',
};

const auth = (state = initialState, action) => {
	if (action.type === AUTH_USER) {
		return { ...state, authenticated: action.payload };
	}

	if (action.type === AUTH_ERROR) {
		return { ...state, errorMessage: action.payload };
	}

	return state;
};

export default auth;
