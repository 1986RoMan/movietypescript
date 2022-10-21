import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/hook";
import {movieAction} from "../../redax";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

const SearchForm:FC = () => {
    const navigate = useNavigate();
    const {reset,handleSubmit,register,getValues} = useForm();
const dispatch = useAppDispatch();
    const mySubmit = (search:any) => {
        dispatch(movieAction.setSearchValue({search:search.search}))
        console.log(search)
        reset()
    };
     const serchValue=getValues()

    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <input placeholder={'Пошук'} {...register('search')}></input>
                <button onClick={()=>navigate('/search')}>Пошук</button>
            </form>
        </div>
    );
};

export {SearchForm};