import React, {FC, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {tvService} from "../../services";
import {ICredit, IGenre, ITvPrograms} from "../../interfaces/interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {tvActions} from "../../redax/slices/tv.slice";
import {genreTvAction} from "../../redax/slices/genreTv.slice";
import css from './TvPagesProgram.module.css'
import { AiOutlineCloseSquare } from "react-icons/ai";
import {MovieList, TvsTop} from "../../componets";

const TvPagesProgram:FC = () => {
    const [classZminna,setClassZminna] = useState(false);
    const [programs,setPrograms] = useState<ITvPrograms <ICredit[],IGenre[]>>();
    const {genresTv} = useAppSelector(state => state.genreTvReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams<{id:string}>();
    useEffect(()=>{
         dispatch(genreTvAction.allGenreTv())
    },[])
    useEffect(()=>{
        tvService.getProgramById(id as string)
            .then(({data}) => {
                setPrograms(data) })
    },[])

    const genreArray=programs?.genres.map(value =>  value.id);
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', marginTop: "15px", marginLeft: '270px', }}>
            <div style={{position:"relative"}}>
                <div><img style={{width:'800px',height:'600px',borderRadius:'10%'}} src={`https://image.tmdb.org/t/p/w500/${programs?.backdrop_path}`} alt=""/></div>
                <div>{programs?.id}</div>
                <div>{programs?.name}</div>
                <div><a href={`${programs?.homepage}`} target={'_blank'} >{programs?.homepage}</a></div>
                <div>{programs?.last_air_date}</div>

                <div onClick={()=>{setClassZminna( prevState => !prevState)}} className={css.directDiv}>Режисери:
                    {programs?.created_by.map(credit=><p key={credit.id} >{credit.name}</p>)}
                </div>
                <div className={!classZminna ? css.directDivRelativ : css.directDivAbsolute }>
                    {
                        programs?.created_by.map(credit=>
                            <div key={credit.id} style={{display:'flex',flexWrap:"wrap",justifyContent:"space-around"}}>
                                <div style={{position:'relative'}} >
                                    <div style={{background:'silver'}}>{credit.name}</div>
                                    <div><img src={`https://image.tmdb.org/t/p/w300/${credit.profile_path}`} alt=""/>
                                    </div>
                                </div>
                            </div>)
                    }
                                    <AiOutlineCloseSquare onClick={()=>{setClassZminna( prevState => !prevState)}} className={css.exit}/>
                </div>
                  <div>
                      {genresTv.map(value =>
                          <div key={value.id}> {genreArray?.includes(value.id)
                              ?
                              <div>
                                  {(value.name + ", ")}
                              </div> : ''}
                          </div>)}
                  </div>
            </div>
        </div>
    );
};
export {TvPagesProgram};