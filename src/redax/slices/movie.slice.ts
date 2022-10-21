import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {IMovie, IServerResponse} from "../../interfaces/interfaces";


interface IState {
    movies:IMovie[],
    pageCount:number| null,
    searchM:object|null,
    filterMovie:IMovie[],
    filterGenre:number|null,
    filterYearValue:string,
    setSearchValue:string
}
const initialState:IState={
    movies:[],
    pageCount:null,
    searchM:null,
    filterMovie:[],
    filterGenre:null,
    filterYearValue:'',
    setSearchValue:''
}
const movieSearch = createAsyncThunk<IServerResponse<IMovie[]>, {search:any,page:number}>(
  'allMovie/movieSearch',
  async ({search,page})=>{
     const{data}=await movieService.searchMovie(search.search,page)
      return data
  }
);
const allMovie = createAsyncThunk<IServerResponse<IMovie[]>,{page:number}>(
    "movieSlice/allMovie",
    async ({page})=>{
        const {data} = await movieService.getAll(page);
        return data;
    }
);
const filterMovie = createAsyncThunk<IServerResponse<IMovie[]>,{genre:any,page:number}>(
    "movieSlice/filterMovie",
    async ({genre,page})=>{
        const {data} = await movieService.filterMovie(genre.genre,page);
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
const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setSearchValue:(state,action)=>{
            state.searchM=action.payload
            console.log(JSON.stringify(state.searchM))
        },
        setFilterValue:((state, action) => {
            state.filterGenre=action.payload
            console.log(state.filterGenre)
        }),
        setYearValue:((state, action) => {
            state.filterYearValue=action.payload
            console.log(state.filterYearValue)
        })
    },
    extraReducers:builder => {
        builder
            .addCase(allMovie.fulfilled,((state, action)=>{
                state.movies=action.payload.results
                console.log(JSON.stringify(state.movies))
                state.pageCount=action.payload.total_pages

            }))
            .addCase(movieSearch.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.pageCount=action.payload.total_pages
            })
            .addCase(filterMovie.fulfilled,(state, action)=>{
                state.filterMovie=action.payload.results
                state.pageCount=action.payload.total_pages
            })
            .addCase(filterYear.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.pageCount=action.payload.total_pages
                console.log(JSON.stringify(state.movies))

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
    setYearValue
}

export {
    movieAction,
    movieReducer
}