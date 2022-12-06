import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {IMovie, IServerResponse} from "../../interfaces/interfaces";
import {AxiosError} from "axios";
import {IError} from "./tv.slice";


interface IState {
    movies:IMovie[],
    pageCount:number| null,
    searchM:object|null,
    filterGenre:number|null,
    filterYearValue:string,
    setSearchValue:string,
    errors:IError|any,
    nowPlayingNow:IMovie[]
}
const initialState:IState={
    movies:[],
    pageCount:null,
    searchM:null,
    filterGenre:null,
    filterYearValue:'',
    setSearchValue:'',
    errors:null,
    nowPlayingNow : []
}
const upcomingAll=createAsyncThunk(
    'upcomingAll',
    async ()=>{
        const {data} = await movieService.allUpcoming();
       return data
    }
)

const movieSearch = createAsyncThunk<IServerResponse<IMovie[]>, {search:any,page:number}>(
  'allMovie/movieSearch',
  async ({search,page})=>{
     const{data}=await movieService.searchMovie(search.search,page)
      return data
  }
);
const allMovie = createAsyncThunk<IServerResponse<IMovie[]>,{page:number}>(
    "movieSlice/allMovie",
    async ({page},{rejectWithValue})=>{
        try {
        const {data} = await movieService.getAll(page);
        return data;
        }
        catch (e) {
            const errror= e as AxiosError
            return rejectWithValue(errror.message)
        }
    }
);
const filterMovie = createAsyncThunk<IServerResponse<IMovie[]>,{genre:any,page:number}>(
    "movieSlice/filterMovie",
    async ({genre,page})=>{
        const {data} = await movieService.filterMovie(genre,page);
        return data;
    }
);
 const filterYear=createAsyncThunk<IServerResponse<IMovie[]>,{year:any,page:number}>(
     'filterYear',
    async ({year,page})=>{
         const {data} = await movieService.sortYear(year.year,page);
         return data
    }
 )
const nowPlying= createAsyncThunk<IServerResponse<IMovie[]>>(
    'nowPlying',
    async () => {
        const {data} = await movieService.allNowPlaying();
        return data
    }
)
const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setSearchValue:(state,action)=>{
            state.searchM=action.payload

        },
        setFilterValue:((state, action) => {
            state.filterGenre=action.payload

        }),
        setYearValue:((state, action) => {
            state.filterYearValue=action.payload

        })
    },
    extraReducers:builder => {
        builder
            .addCase(allMovie.fulfilled, ((state, action) => {
                state.movies = action.payload.results
                state.pageCount = action.payload.total_pages
                state.errors= ''
            }))
            .addCase(upcomingAll.fulfilled,((state, action) => {
                state.movies=action.payload.results
            }))
            .addCase(movieSearch.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.pageCount=action.payload.total_pages
            })
            .addCase(filterMovie.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.pageCount=action.payload.total_pages
            })
            .addCase(filterYear.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.pageCount=action.payload.total_pages
            })
            .addCase(nowPlying.fulfilled,((state, action) => {
                     state.nowPlayingNow =action.payload.results
            }))
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload
                }
            })
    }
})

const {reducer:movieReducer,actions:{setSearchValue,setFilterValue,setYearValue}} = movieSlice;
const movieAction={
    allMovie,
    movieSearch,
    setSearchValue,
    filterMovie,
    setFilterValue,
    filterYear,
    setYearValue,
    nowPlying,
    upcomingAll
}

export {
    movieAction,
    movieReducer
}