import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types";

const initialState: {
    currentUser: object | null,
    loading: boolean,
    error: any,
    accessGranted: boolean,
} = {
    currentUser: null,
    loading: false,
    error: null,
    accessGranted: false,
}

const authReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {

        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, currentUser: payload, accessGranted: true }
        case LOGIN_FAIL:
            return { ...state, loading: false, error: payload, accessGranted: false }
        case LOGOUT:
            return { ...state, currentUser: payload, error: null, accessGranted: false }
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null }
        case REGISTER_SUCCESS:
            return { ...state, loading: false, currentUser: payload, accessGranted: true }
        case REGISTER_FAIL:
            return { ...state, loading: false, error: payload, accessGranted: false }
        // case FETCH_USER_DETAIL_REQUEST:
        //     return { ...state, loading: true, error: null }
        // case FETCH_USER_DETAIL_SUCCESS:
        //     return { ...state, loading: false, userDetail: payload }
        // case FETCH_USER_DETAIL_FAIL:
        //     return { ...state, loading: false, error: payload }
        default:
            return state
    }
}


export default authReducer;