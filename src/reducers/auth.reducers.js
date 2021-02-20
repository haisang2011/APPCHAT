import { Auth } from '../contants/actionType';

const initialState = {
    token: localStorage.getItem('token'),
    currentUser: null,
    isAuthenticated: null,
    isLoading: false,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case Auth.USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case Auth.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                /* currentUser */
            }
        case Auth.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                /* currentUser */
                isAuthenticated: true,
                isLoading: false,
            }
        case Auth.LOGIN_FAIL:
        case Auth.AUTH_ERROR:
        case Auth.LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                currentUser: null,
                isAuthenticated: false,
                isLoading: false,
            }
        default:
            return state;
    }
}