import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/hook";
import {movieAction} from "../../redax";
import {useNavigate} from "react-router-dom";

const FormYear:FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {reset,handleSubmit,register} = useForm();
    const array=[]
    for (let i = 2022; 1900 <=i ; i--) {
        array.push(i);
    }

    const submit = (year:any) => {
        dispatch(movieAction.setYearValue({year:year.year}))
        reset()
    };

    return (
        <div className='mb-0.5'>
            <form  onSubmit={handleSubmit(submit)}>
                <span className='text-red-50'>Вибрати рік :</span>: <select className='bg-amber-800' {...register('year')}>
                {array.map((value,index) => <option key={index} value={value}>{value}</option >)}
            </select>
                <button className='border-2 m-lg-1 w-25 h-8  text-red-50 bg-blue-200 rounded-full' onClick={()=>navigate('year')}>Вибір</button>
            </form>
        </div>
    );
};

export  {FormYear};