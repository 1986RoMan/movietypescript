import {axiosInstance} from "./axios.service";
import {urls} from "../constans";
import {AxiosResponse} from "axios";
import {IGenre, IServerResponseGenre} from "../interfaces/interfaces";

const api_key='d5e768d1beb0e7057f807f2f56ffd621'

type Res<T>=Promise<AxiosResponse<T>>


const genreService={
    getAll:():Res<IServerResponseGenre < IGenre[]>> => axiosInstance.get(`${urls.genre}?api_key=${api_key}&language=ru`)
}

export {genreService}