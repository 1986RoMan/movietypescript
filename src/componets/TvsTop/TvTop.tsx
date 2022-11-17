import React, {FC} from 'react';
import {ITv} from "../../interfaces/interfaces";
import {Link} from "react-router-dom";

interface ITvTopProps {
    tvTop:ITv
}
const TvTop:FC<ITvTopProps> = ({tvTop}) => {
    return (
        <Link to={`${tvTop.id}`} state={tvTop}>
            <div className='w-[250px]  inline-block p-2 cursor-pointer hover:scale-105 ease-in-out decoration-300'>
                <div><img className='h-[250px]' src={`https://image.tmdb.org/t/p/w300/${tvTop.backdrop_path}`} alt=""/></div>
                <div>{tvTop.original_name}</div>
            </div>
        </Link>
    );
};

export {TvTop};