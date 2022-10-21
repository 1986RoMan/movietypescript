import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genreReducer} from "./slices/genre.slice";
import {personReducer} from "./slices/person.slice";

const rootReducer=combineReducers({
    movieReducer,
    genreReducer,
    personReducer
})

const setupStore =() =>configureStore({
    reducer:rootReducer
})


type RootState = ReturnType<typeof rootReducer>
type AppStore= ReturnType<typeof setupStore>
type AppDispatch= AppStore['dispatch']

export type {
    RootState,
    AppDispatch,
    AppStore
}
export {setupStore}