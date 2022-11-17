import React, {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {genreAction} from "../../redax/slices/genre.slice";
import {movieAction} from "../../redax";
import {useNavigate} from "react-router-dom";
import './FilterMovie.scss'


const FilterMovie:FC = () => {
   const [srtin,setStrin] = useState(false);

    const navigate = useNavigate();
    const {genres} = useAppSelector(state => state.genreReducer);
    const {register,handleSubmit,reset} = useForm();
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        dispatch(genreAction.genreAll())
    },[]);

    const submit = (filt:any) =>{
    //     console.log(filt)
    //      dispatch(movieAction.setFilterValue(filt))
      reset()
     }

const array:any=[]
    const send = (e:any, genre:any) => {
        e.preventDefault();
    const elementu:any= document.getElementById(`${genre.id}`)
         elementu.className='redi'
        array.push(genre.id)

    }

    return (
        <div style={{marginBottom:'20px'}}>
          {/*</form>*/}
          {/*  <form onSubmit={handleSubmit(submit)}>*/}
          {/*      {*/}
          {/*          genres.map(genre=> <button className={'filterButton'} onClick={()=>{*/}
          {/*              navigate('/filter')*/}
          {/*              dispatch(movieAction.setFilterValue(genre.id))}}>*/}
          {/*              {genre.name}*/}
          {/*          </button>)*/}
          {/*      }*/}
          {/*  </form>*/}
            <form onSubmit={handleSubmit(submit)}>
                <div style={{ display: "flex",flexWrap: "wrap"}}>{
                    genres.map(genre =>
                        <button key={genre.id} id={`${genre.id}`} className={srtin ? 'filterButton' : 'filterButton1'}
                                {...register('genre')}
                                onClick={(e) => {
                                    send(e, genre)
                                }}>
                            {genre.name}
                        </button>)
                }</div>
                <button  className={'btnSearch'} onClick={()=>{
                    navigate('/filter')
                    dispatch(movieAction.setFilterValue(array))
                      setStrin(prevState => !prevState)
                }
                }
                >Шукати...</button>
                  </form>
        </div>
    );
};

export {FilterMovie};