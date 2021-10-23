import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../settings/apiConfig";

const callApi = ( endpoint: string, method: any, data: any, token: string | undefined ) => { //
    const object: AxiosRequestConfig<any> 
    // {
    //     url: string,
    //     method: string,
    //     data: any,
    //     headers?: any,
    // } 
    = {
        url: `${BASE_URL}/${endpoint}`,
        method: method,
        data,
        headers: token ? {
            Authorization: `Bearer ${token}`
        } : undefined,
    }
    return axios(object);
}

export default callApi;