import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IServerResponseGenre} from "../../interfaces/interfaces";
import {genreService, movieService} from "../../services";

 type IState={
     genres:IGenre[]
 }
const initialState:IState={
    genres:[]
}

const genreAll = createAsyncThunk<IServerResponseGenre<IGenre[]>>(
    'genreSlice/genreAll',
    async ()=>{
        const {data}=await genreService.getAll();
        return data
    }
);
const genreSlice = createSlice({
   name:'genreSlice',
    initialState,
   reducers:{},
   extraReducers:(builder => {
       builder
           .addCase(genreAll.fulfilled,((state, action) => {
               state.genres=action.payload.genres
           }))
   })
});

 const {reducer:genreReducer,actions:{}} = genreSlice;
 const genreAction={
     genreAll
 }
export {
     genreAction,
    genreReducer
}