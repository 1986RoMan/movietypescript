import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IServerResponseGenre} from "../../interfaces/interfaces";
import {tvService} from "../../services";

interface ITvState {
    genresTv:IGenre[]
}

const initialState:ITvState={
genresTv:[]
}
const allGenreTv = createAsyncThunk<IServerResponseGenre<IGenre[]>>(
  'genreTvSlice/allGenreTv',
  async () => {
      const {data} =  await tvService.allTvGenre();
      return data
  }
);

const genreTvSlice=createSlice({
    name:'genreTv',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(allGenreTv.fulfilled,((state, action) => {
                state.genresTv=action.payload.genres
            }))
    }
})

const {reducer:genreTvReducer,actions:{}} = genreTvSlice;

const genreTvAction={
    allGenreTv
}
export {
    genreTvReducer,
    genreTvAction
}