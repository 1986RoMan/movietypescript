import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams, Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import {movieService} from "../../services";
import css from './PersonInfo.module.css'
import {useAppLocation} from "../../hooks/router.hook";
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons";

export interface IPerson {
    biography: string,
    birthday: string,
    name: string,
    place_of_birth: string,
    popularity: string,
    profile_path: string,
    also_known_as: Array<string>
}
export interface ICast{
    name?:string
    backdrop_path:string,
    character:string,
    credit_id:string,
    id:number,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    title:string,
    vote_average:number,
    vote_count:number
}
export interface ICrew{
    id:number,
    department:string,
    original_language:string,
    original_title:string,
    job:string,
    overview:string,
    vote_count:number,
    video:boolean,
    poster_path:string | null,
    backdrop_path: string | null,
    title:string,
    popularity:number,
    vote_average: number,
    release_date: string,
    credit_id:string
}
export interface IMoviePerson{
    cast:ICast[],
    crew:ICrew[],
    id:number
}

const PersonInfo: FC = () => {
    const navigate = useNavigate();
    const {state} = useAppLocation<IPerson>();
    const [movie,setMovie] = useState<IMoviePerson |null>(null);
    const [person, setPerson] = useState<IPerson|null>(null);
    const {id_person} = useParams<{id_person:string}>();

    useEffect(()=>{
        movieService.movieCredits(state.id).then(({data})=>{
             setMovie(data)})
    },[])

    useEffect(() => {
        if(state){
            movieService.personInfo(id_person).then(({data}) => {
            setPerson(data)
        })}
       else  if(id_person){
            movieService.personInfo(id_person).then(({data}) => {
                setPerson(data)
            })}
    }, [state,id_person])
    const ternarka = person?.also_known_as.find(value1 => value1.replace(/[^а-я]/g, ""))
    const movieArray=[]
    if( state.known_for){
     for ( let valueElement of state.known_for) {
            movieArray.push(valueElement)
        }
    }

    return (
        <div style={{display: 'flex',flexWrap:'wrap',marginTop:"15px",marginLeft:'280px',color:'white'}}>
            {
                person
                &&
                <div>
                    {/*<FontAwesomeIcon icon={faSquareXmark} />*/}
                    <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} alt="person"/>
                    <div>{ternarka ? ternarka : person.name } </div>
                    <div>{person.biography}</div>
                    <div>{person.birthday}</div>
                    <div style={{display:'flex',flexWrap:'wrap'}}><strong>Знімався в фільмах:</strong>
                        {
                      movie && movie.cast.map(value => <span key={value.id} className={css.divka} onClick={()=>navigate(`/movies/${value.id}`,{state:value})}>{value.title + " ,"}</span>)
                        }
                    </div>
                    <div>Народився:{person.place_of_birth}</div>
                    <div>Популярність:{person.popularity}</div>
                    { state.known_for ?
                        <div>Найпопулярніші фільми за участю актора:
                            {movieArray.map((value, index) =>
                                <div key={value.id} className={css.divka}
                                     onClick={() => navigate(`/movies/${value.id}`, {state: value})}>
                                    {value.title}
                                </div>)}
                        </div>
                        :
                        <p> </p>
                    }

                </div>
            }
        </div>
    );
};

export {PersonInfo};