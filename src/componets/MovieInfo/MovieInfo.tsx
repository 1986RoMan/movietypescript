import React, {FC, useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'

import {useAppSelector} from "../../hooks/hook";
import {movieService} from "../../services";
import {IMoviePerson} from "../PersonInfo/PersonInfo";
import css from './PersonInfo.module.css'

interface IKey {
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
}

const MovieInfo:FC = () => {
    const navigate = useNavigate();
    const [keys,setKey] = useState<IKey>();
    const [credits,setCredits] = useState<IMoviePerson>();
    const {genres} = useAppSelector(state =>state.genreReducer );
    const params = useParams();
    const {state} = useLocation();
    const [movie,setMovie] = useState<IMoviePerson>(state);

    useEffect(()=>{
       movieService.credits(state.id).then(({data})=>{
            setCredits(data)})
    },[])

    useEffect(()=>{
        if(state){
movieService.videoMovie(state.id).then(({data}) => {
    setKey(data.results[0])
    })
        }
        else if(params){
            movieService.videoMovie(params.id).then(({data}) => {
                setKey(data.results[0])
            })
        }
    },[])

    return (
        <div style={{display: 'flex',flexWrap:'wrap',marginLeft:'280px',color:'white'}}>

            <h1>
                Інформація про фільм"
            </h1>
            <div>
                <img style={{width:'800px',height:'600px',borderRadius:'10%'}} src={`https://image.tmdb.org/t/p/w500/${state.backdrop_path}`} alt={state.original_title}/>
                <div>
                    <div>
                        <b>Назва:</b> {state.title}
                    </div>
                    <div style={{display:'flex'}}>
                        <b >Жанри:</b> {genres.map(value =>
                        <div style={{marginLeft:'2px'}}  key={value.id}> {state.genre_ids.includes(value.id)
                            ?
                            <div >
                                {(value.name + ", ")}
                            </div> : ''}
                        </div>)}
                    </div>
                    <div><b>Оригінальна мова:</b> {state.original_language}
                    </div>
                    <div style={{display:'flex',flexWrap:'wrap'}}><b >Акторський склад:</b>
                        {
                            credits?.cast.map(actor=>
                                <div key={actor.id} className={css.divka} onClick={()=>navigate(`/person/${actor.id}`,{state:actor})} style={{marginLeft:'5px'}}> {actor.name+' ,'}
                                </div>)
                        }
                    </div>
                    <div>
                        <b>Оригінальна назва:</b> {state.original_title}
                    </div>
                    <div>
                        <b>Коротко про фільм:</b> {state.overview}
                    </div>
                    <div>
                        <b>Популярність:</b> {state.popularity}
                    </div>
                    <div>
                        <b>Дата релізу:</b> {state.release_date}
                    </div>
                    <div>
                        <b>Сподобалось людям:</b> {state.vote_count}
                    </div>
                </div>
            </div>
            {
            keys && <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${keys.key}}`}/>
            }
        </div>
    );
};

export {MovieInfo};