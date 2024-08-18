import axios, { AxiosInstance } from 'axios';



const API_URL = "http://routingpocloadbalancer-177396329.us-east-2.elb.amazonaws.com/api/";
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});
export default apiClient;
