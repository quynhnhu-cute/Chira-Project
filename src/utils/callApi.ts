import axios from "axios";
import { BASE_URL } from "../settings/apiConfig";

const callApi = ( endpoint: string, method = 'GET', data: any, token: any ) => { //
    const object: {
        url: string,
        method: string,
        data: any,
        headers?: any,
    } = {
        url: `${BASE_URL}/${endpoint}`,
        method,
        data,
        headers: token ? {
            Authorization: `Bearer ${token}`
        } : null,
    }
    return axios(object)
}

export default callApi;