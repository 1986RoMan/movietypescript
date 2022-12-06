import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook";

import {movieAction} from "../../redax";
import {MovieCard} from "../MovieCard/MovieCard";

const Upcoming:FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(()=>{
       dispatch(movieAction.upcomingAll())
    },[])
    return (
        <div style={{display: 'flex',flexWrap:'wrap',paddingLeft:'280px'}}>
            {
                movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {Upcoming};