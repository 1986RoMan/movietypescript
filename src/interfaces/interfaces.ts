export interface IGenre{
    id:number;
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
