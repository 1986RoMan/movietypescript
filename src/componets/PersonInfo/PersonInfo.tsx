import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams, Link, useNavigate} from "react-router-dom";
import {movieService} from "../../services";
import css from './PersonInfo.module.css'

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
    const [movie,setMovie] = useState<IMoviePerson>();
    const [person, setPerson] = useState<IPerson>();
    const {state} = useLocation();
    const params = useParams();
    console.log(state)
    useEffect(()=>{
        movieService.movieCredits(state.id).then(({data})=>{
             setMovie(data)
            console.log(data)})
    },[])

    useEffect(() => {
        if(state){
        movieService.personInfo(state.id).then(({data}) => {
            setPerson(data)
            console.log(data)
        })}
       else  if(params){
            movieService.personInfo(params.id_person).then(({data}) => {
                setPerson(data)
                console.log(data)
            })}
    }, [state,params])
    const ternarka = person?.also_known_as.find(value1 => value1.replace(/[^а-я]/g, ""))
    console.log(ternarka)

    console.log(state)
    console.log(params)
    // const movieArray=[]
    // for (const valueElement of state.known_for) {
    //     console.log(valueElement.original_title)
    //       movieArray.push(valueElement)
    // }
    // let corect=movieArray.join(',')
    // console.log(movieArray)
    return (
        <div style={{display: 'flex',flexWrap:'wrap',marginTop:"15px",marginLeft:'270px'}}>
            {
                person
                &&
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} alt="person"/>
                    <div>{ternarka ? ternarka : person.name } </div>
                    <div>{person.biography}</div>
                    <div>{person.birthday}</div>
                    <div style={{display:'flex',flexWrap:'wrap'}}><strong>Знімався в фільмах:</strong>
                        {
                      movie && movie.cast.map(value => <span  className={css.divka} onClick={()=>navigate(`/movies/${value.id}`,{state:value})}>{value.title + " ,"}</span>)
                        }
                    </div>
                    <div>{person.place_of_birth}</div>
                    <div>{person.popularity}</div>
                    {/* <div >Найпопулярніші фільми за участю актора:<div>{movieArray.map((value, index)=>*/}
                    {/*    <div key={index} className={css.divka} onClick={()=>navigate(`/movies/${value.id}`,{state:value}) }>{value.title}</div>)}*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
            }
        </div>
    );
};

export {PersonInfo};