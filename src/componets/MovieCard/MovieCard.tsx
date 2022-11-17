import React, {FC, ReactNode, useState} from 'react';
import {Link} from "react-router-dom";
import {IoIosInformationCircleOutline} from 'react-icons/io'
import {IGenre, IMovie} from "../../interfaces/interfaces";
import css from './MovieCard.module.css'
import {useAppSelector} from "../../hooks/hook";
export  interface Iprops {
        movie:IMovie,
        children?:ReactNode
    }
const MovieCard:FC<Iprops> = ({movie}) => {
    const {genres} = useAppSelector(state => state.genreReducer);
      const [info,setInfo] = useState(false);
    return (
        <div>
                <IoIosInformationCircleOutline style={{color:'white',fontSize:'30px',marginBottom:'-30px'}}
                                               onMouseOver={()=>{setInfo(prevState => !prevState)}}
                                               onMouseOut={()=>{setInfo(prevState => !prevState)}}
                />
        <div className={css.card}>
            <Link style={{color:'white',fontSize:'20px'}} to={`${movie.id}`} state={movie}>
            <div><img style={{width:'180px',height:'180px',borderRadius:'5px'}} src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt={movie.title}/></div>
            <div>{movie.adult}</div>
            <div>{movie.title}</div>
        </Link>
                {!info ? <div className={css.card} onClick={()=>{setInfo(prevState => !prevState)}}></div>
                    :
                    <div onClick={()=>{setInfo(prevState => !prevState)}} className={css.blok1}>
                        <div><b>{movie.title}</b></div>
                        Peйтинг:<div>{movie.vote_average}</div>
                        Дата релізу:<div>{movie.release_date}</div>
                        <div>
                            <b>Жанри:</b> {genres.map(value =>
                            <div key={value.id}> {movie.genre_ids.includes(value.id)
                                ?
                                <div>
                                    {(value.name + ", ")}
                                </div> : ''}
                                <div/>
                            </div>)}
                        </div>
                    </div>}
        </div>
        </div>
            );
};

export {MovieCard};