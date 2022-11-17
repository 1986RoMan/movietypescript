import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IServerResponse, IServerResponseTv, ITv} from "../../interfaces/interfaces";
import {tvService} from "../../services";
import {AxiosError} from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export interface IError {
     status_code:number,
     status_message:string,
     success:boolean
 }

interface IState{
    tvs:ITv[],
    pageCount:number|null
    tvsTop:ITv[],
    errors:any| IError
}

const initialState:IState={
    tvs:[],
    pageCount:null,
    tvsTop:[],
    errors:null
}
const allTv = createAsyncThunk<IServerResponseTv<ITv[]>,{page:number}>(
  'tvSlice/allTv',
  async ({page},{rejectWithValue}) => {
      try {
          const {data} =  await tvService.getAllTv(page);
          return data
      }
      catch (e) {
          const eror= e as AxiosError
              return rejectWithValue(eror.message);
          }
  }
);
 const allTvTop = createAsyncThunk<IServerResponseTv<ITv[]>> (
   'tvSlice/allTvTop',
   async () => {
       const {data} = await tvService.tvTop();
       return data
   }
 );

const tvSlice = createSlice({
    name:'tvSlice',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(allTv.fulfilled,((state, action) => {
                state.tvs=action.payload.results
                state.pageCount=action.payload.total_pages
                //state.errors=null
            }))
            .addCase(allTv.rejected,((state, action) => {
                state.errors=action.payload
                console.log(state.errors.status_message)
            }))
            .addCase(allTvTop.fulfilled,((state, action) => {
                state.tvsTop=action.payload.results

            }))
    }
});

const{reducer:tvReducer,actions:{}}=tvSlice
const tvActions={
   allTv,
    allTvTop
}
export {tvReducer,
tvActions}
