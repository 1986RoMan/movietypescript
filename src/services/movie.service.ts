import {axiosInstance} from "./axios.service";
import {urls} from "../constans";
import {IMovie, IPerson, IPersonServerResponse, IServerResponse} from "../interfaces/interfaces";
import {AxiosResponse} from "axios";

 const api_key='d5e768d1beb0e7057f807f2f56ffd621'

type Res<T>=Promise<AxiosResponse<T>>
const movieService ={
 getAll:(page:number):Res<IServerResponse < IMovie[] >> => axiosInstance.get(`${urls.movie}?api_key=${api_key}`,
     {params:{page}}),
 searchMovie:(name:object,page:number):Res<IServerResponse < IMovie[] >> => axiosInstance.get(`${urls.search}?api_key=${api_key}&query=${name}`,{params:{page}}),
  filterMovie:(genre:number,page:number) => axiosInstance.get(`${urls.movie}?api_key=${api_key}&with_genres=${genre}`,{params:{page}}),
 videoMovie:(video_id:any)=> axiosInstance.get(`${urls.movieVideo}/${video_id}/videos?api_key=${api_key}`),
 sortYear:(year:any,page:number):Res<IServerResponse < IMovie[] >> =>axiosInstance.get(`${urls.movie}?api_key=${api_key}&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`,{params:{page}}),
 popularPerson:(page?:number):Res<IPersonServerResponse < IPerson[] >> => axiosInstance.get(`${urls.person}?api_key=${api_key}`,
     {params:{page}}),
 personInfo:(id:any)=> axiosInstance.get(`${urls.personInf}/${id}?api_key=${api_key}`),
 movieCredits:(person_id:number)=>axiosInstance.get(`${urls.personInf}/${person_id}/movie_credits?api_key=${api_key}`),
 credits:(id:number)=> axiosInstance.get(`${urls.movieVideo}/${id}/credits?api_key=${api_key}`)
}

export {movieService}