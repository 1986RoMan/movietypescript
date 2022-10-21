import React, {FC, ReactNode, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces/interfaces";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/hook";
import {movieService} from "../../services";
import {movieAction, personAction} from "../../redax";

  export  interface Iprops {
        movie:IMovie,
        children?:ReactNode
    }
const MovieCard:FC<Iprops> = ({movie}) => {

    return (
        <div style={{
        display: 'flex',
            flexWrap:'wrap',
            // height:'250 px',
            border:'solid 2px black',
            //justifyContent: 'center',
            //alignItems: 'center',
            flexDirection:'column',
            width: '180px',
                 margin:'20px',
            borderRadius:'5%'
    }}>
            <Link to={`${movie.id}`} state={movie}>
            <div><img style={{width:'180px',height:'150px'}} src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt=""/></div>
            <div>{movie.id}</div>
            <div>{movie.adult}</div>
            <div>{movie.title}</div>
            <div>{movie.release_date}</div>
        </Link>
        </div>
    );
};

export {MovieCard};