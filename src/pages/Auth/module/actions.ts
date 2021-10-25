import userApi from "apis/userApi";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./types";

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