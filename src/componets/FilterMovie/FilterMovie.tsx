import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {genreAction} from "../../redax/slices/genre.slice";
import {movieAction} from "../../redax";
import {useNavigate} from "react-router-dom";
import {Button} from "reactstrap";


const FilterMovie:FC = () => {
    const navigate = useNavigate();
    const {genres} = useAppSelector(state => state.genreReducer);
    const {register,handleSubmit,reset} = useForm();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(genreAction.genreAll())
    },[])
    console.log(genres)
    const submit = (filt:any) => {
       dispatch(movieAction.setFilterValue(filt))
        console.log(filt)
        reset()
    }
    return (
        <div>
          <form onSubmit={handleSubmit(submit)}>
              <select {...register('genre')}>
                  <option >all</option>
              {
               genres.map(genre=> <option value={`${genre.id}`}>{genre.name}</option>)
              }
          </select>

              <button onClick={()=>navigate('/filter')}>Вибір жанра</button>
          </form>
        </div>
    );
};

export {FilterMovie};