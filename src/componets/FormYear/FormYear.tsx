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
        console.log(year.year)
        dispatch(movieAction.setYearValue({year:year.year}))

    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                Вибрати рік: <select {...register('year')}>
                {array.map(value => <option value={value}>{value}</option>)}
            </select>
                <button onClick={()=>navigate('year')}>Вибір</button>
            </form>
        </div>
    );
};

export  {FormYear};