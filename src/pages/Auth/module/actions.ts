import userApi from "apis/userApi";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types";

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