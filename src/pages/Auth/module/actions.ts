import userApi from "apis/userApi";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, TEST_TOKEN_FAIL, TEST_TOKEN_REQUEST, TEST_TOKEN_SUCCESS } from "./types";

//////////// LOG IN ////////////
const actLoginRequest = () => ({
    type: LOGIN_REQUEST,
});

const actLoginSuccess = (data: any) => ({
    type: LOGIN_SUCCESS,
    payload: data.content,
});

const actLoginFail = (error: Error) => ({
    type: LOGIN_FAIL,
    payload: error,
});

export const actLogin = (user: object, history: any) => {
    return (dispatch: any) => {
        dispatch(actLoginRequest());
        userApi.loginApi(user)
        .then(response => {
            console.log(response);
            dispatch(actLoginSuccess(response.data));
            history.push('/');
        })
        .catch(error => {
            console.log(error);
            dispatch(actLoginFail(error));
            alert('Email or Password incorrect!')
        });
    }
}

//////////// REGISTER ////////////
const actRegisterRequest = () => ({
    type: REGISTER_REQUEST,
});

const actRegisterSuccess = (data: any) => ({
    type: REGISTER_SUCCESS,
    payload: data.content,
});

const actRegisterFail = (error: Error) => ({
    type: REGISTER_FAIL,
    payload: error,
});

export const actRegister = (user: object, history: any) => {
    return (dispatch: any) => {
        dispatch(actRegisterRequest());
        userApi.registerApi(user)
        .then(response => {
            console.log(response.data);
            dispatch(actRegisterSuccess(response.data));
            history.push('/');
        })
        .catch(error => {
            console.log(error);
            dispatch(actRegisterFail(error));
            alert('Email or Password incorrect!')
        });
    }
}

//////////// TEST TOKEN ////////////
const actTestTokenRequest = () => ({
    type: TEST_TOKEN_REQUEST,
});

const actTestTokenSuccess = (data: any) => ({
    type: TEST_TOKEN_SUCCESS,
    payload: data.content,
});

const actTestTokenFail = (error: Error) => ({
    type: TEST_TOKEN_FAIL,
    payload: error,
});

export const actTestToken = (accessToken: string, history: any | undefined) => {
    return (dispatch: any) => {
        dispatch(actTestTokenRequest());
        userApi.testTokenApi(accessToken)
        .then(response => {
            console.log(response.data);
            dispatch(actTestTokenSuccess(response.data));
            // history.push('/');
        })
        .catch(error => {
            console.log(error.message);
            dispatch(actTestTokenFail(error));
            // alert('Email or Password incorrect!');
        });
    }
}

//////////// LOG OUT ////////////
export const actLogout = () => ({
    type: LOGOUT,
    payload: null,
});