import callApi from "../utils/callApi";

const userApi = {
    loginApi(user: object) {
        return callApi('Users/signin', 'POST', user);
    },
    registerApi(user: object) {
        return callApi('Users/signup', 'POST', user);
    },
};

export default userApi;