import axios from "axios";

export const instance = axios.create({
    baseURL: "https://apis.data.go.kr/B551011/Durunubi",
    timeout: 1000
})

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    if (response.status == 400) {
        return response;
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});