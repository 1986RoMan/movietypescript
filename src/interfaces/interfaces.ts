export interface IGenre{
    id:any;
    name:string
}
export interface IMovie {
    poster_path: string;
    adult:boolean;
    optional: string;
    overview: string;
    release_date: string;
    id:number;
    genre_ids:IGenre[];
    original_title :string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count:number;
    video:boolean;
    vote_average:number
}
export interface IServerResponse<T>{
    page:number,
    results:IMovie[],
    total_pages: number,
    total_results: number
}
export interface IServerResponseTv<T>{
    page:number,
    results:ITv[],
    total_pages: number,
    total_results: number
}
export interface IServerResponseGenre<T>{
    genres:IGenre[]
}

export interface IPerson{
    adult: boolean,
    gender: number,
    id: number,
    known_for:IMovie[]
    known_for_department:string,
    name: string,
    popularity: number| null,
    profile_path: string
}

export interface IPersonServerResponse<T>{
    page:number,
    total_pages: number,
    total_results: number
    results: []
}
export interface ITv {
    "poster_path": string,
    "popularity": number,
    "id": number,
    "backdrop_path": null,
    "vote_average": number,
    "overview":string,
    "first_air_date": string,
    original_name:string
}
interface ILastEpisode {
    air_date:string,
    name:string,
    overview:string,
    still_path:string,
    show_id:number
}
export interface ICredit{
    id:number,
    credit_id:string,
    name:string,
    profile_path:string
}
export interface ITvPrograms<T,B> {
    created_by:ICredit[]
    backdrop_path:string,
    genres:IGenre[],
    homepage:string,
    id:number,
    last_air_date:string,
    last_episode_to_air: ILastEpisode
    name:string,
    status:string,
    tagline: string,
    "type": string,
    "vote_average": number,
    "vote_count": number
}

