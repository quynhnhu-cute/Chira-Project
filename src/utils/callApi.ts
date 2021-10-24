import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { BASE_URL, CYBERSOFT_TOKEN } from "../settings/apiConfig";

const callApi = ( endpoint: string, method: any, data: any, token?: string | undefined, CSToken = CYBERSOFT_TOKEN ) => { //
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
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            TokenCyberSoft: CSToken
        },
    }
    return axios(object);
}

export default callApi;