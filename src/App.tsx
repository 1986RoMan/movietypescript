import React, {FC} from 'react';
import './App.css';
import {MovieInfo, MovieList, PersonInfo, PersonPage, SearchPage, YearPage} from "./componets";
import {Navigate, Route, Routes} from 'react-router-dom'
import {MainLayout} from "./layout/MainLayout/MainLayout";
import {FilterMovie} from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
    return (
        <Routes >
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'} />}/>
                <Route path={'movies'} element={<MovieList />}/>
                    <Route path={'movies/:id'} element={<MovieInfo />}/>
                <Route path={'filter'} element={<FilterMovie />}/>
                    <Route path={'filter/:id'} element={<MovieInfo />}/>
                <Route path={'search'} element={<SearchPage/>}></Route>
                    <Route path={'search/:id'} element={<MovieInfo />}/>
                <Route path={'year'} element={<YearPage/>}></Route>
                        <Route path={'year/:id'} element={<MovieInfo />}/>
                <Route path={'person'} element={<PersonPage />}/>
                <Route path={'person/:id_person'} element={<PersonInfo />}/>
            </Route>
        </Routes>
    );
}

export {App};
