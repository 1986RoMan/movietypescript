import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constans";

export type AxiosRes<T>=Promise<AxiosResponse<T>>;
let axiosInstance = axios.create({baseURL});

export {axiosInstance}