import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/hook";
import {useNavigate} from "react-router-dom";

import {movieAction} from "../../redax";

const SearchForm:FC = () => {
    const navigate = useNavigate();
    const {reset,handleSubmit,register,getValues} = useForm();
const dispatch = useAppDispatch();
    const mySubmit = (search:any) => {
        dispatch(movieAction.setSearchValue({search:search.search}))
        reset()
    };
     const serchValue=getValues()

    return (
        <div className='mb-0.5 mt-0'>
            <form onSubmit={handleSubmit(mySubmit)}>
                <input className='bg-amber-800' placeholder={'Пошук'} {...register('search')}></input>
                <button className='border-2 m-lg-1 w-22 h-8  text-red-50 bg-blue-200 rounded-full' onClick={()=>navigate('/search')}>Пошук</button>
            </form>
        </div>
    );
};

export {SearchForm};