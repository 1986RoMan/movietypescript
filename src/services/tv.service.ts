import {api_key} from "./movie.service";
import {axiosInstance} from "./axios.service";
import {urls} from "../constans";
import {ICredit, IGenre, IServerResponseGenre, IServerResponseTv, ITv, ITvPrograms} from "../interfaces/interfaces";
import {AxiosResponse} from "axios";

type Res<T>=Promise<AxiosResponse<T>>
const tvService= {
    getAllTv: (page: number): Res<IServerResponseTv<ITv[]>> => axiosInstance.get(`${urls.tv}?api_key=${api_key}`, {params: {page}}),
    getProgramById: (id: string) => axiosInstance.get(`${urls.tvProgram}/${id}?api_key=${api_key}`),
    allTvGenre: () : Res<IServerResponseGenre<IGenre[]>> => axiosInstance.get(`${urls.genderTv}?api_key=${api_key}`),
    tvTop: (): Res<IServerResponseTv<ITv[]>> => axiosInstance.get(`${urls.tvTop}?api_key=${api_key}`)
}

export {tvService}