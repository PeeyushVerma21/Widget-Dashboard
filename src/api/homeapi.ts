import apiClient from "../lib/apiClient";

export const login =
    (body : any) => {
        return apiClient.post('/auth/login', body);
    };

export const fetchDataforroute = () => {
    return apiClient.get('/data/');
};
  