import axios, { AxiosInstance } from "axios";

export const setInterceptors = (type: number): AxiosInstance => {
    const instance = axios.create({
        baseURL: type === 1 ? "https://apis.data.go.kr/B551011/Durunubi" : "https://apis.data.go.kr/B551011/KorService1/searchKeyword1"
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

    return instance
}