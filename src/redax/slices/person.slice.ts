import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPerson, IPersonServerResponse} from "../../interfaces/interfaces";
import {movieService} from "../../services";

interface IPersonInitial{
    moviesPerson:IPerson[],
    name: string,
        page:number|null,
        gender:number|null,
        total_pages:number|null,
        pageCount:number|null
}

const initialState:IPersonInitial ={
    moviesPerson:[],
    name:'',
    page:null,
    gender:null,
    total_pages:null,
    pageCount:null
}
const personPopular = createAsyncThunk<IPersonServerResponse<IPerson[]>,{page?:number}>(
    'personSlice/personPopular',
          async ({page})=> {
            const {data}= await movieService.popularPerson(page)
        return data
          }
);

const personSlice =createSlice({
    name:'personSlice',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(personPopular.fulfilled,((state, action) => {
                state.moviesPerson= action.payload.results
                state.pageCount=action.payload.total_pages
                //state.page=action.payload.page
               console.log(JSON.stringify(state.moviesPerson))
            }))
    }
})

const {reducer:personReducer,} = personSlice;
const personAction={
    personPopular
}
export {personReducer,personAction}