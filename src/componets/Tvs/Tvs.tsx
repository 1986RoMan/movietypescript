import React, {FC} from 'react';
import {ITv} from "../../interfaces/interfaces";
import {Link} from "react-router-dom";

interface IPropsTv{
    tv:ITv
}
const Tvs:FC<IPropsTv> = ({tv}) => {
    
    return (
        <Link to={`${tv.id}`} state={tv}>
            <div style={{width: '180px', height: '200px' }}>
                <div><img style={{width: '180px', height: '150px', borderRadius: '5px'}}
                          src={`https://image.tmdb.org/t/p/w300/${tv.backdrop_path}`} alt=""/></div>
                <div>{tv.id}</div>
                <div>{tv.original_name}</div>
                <div>{tv.first_air_date}</div>
                <div>{tv.popularity}</div>
            </div>
        </Link>
    );
};

export {Tvs};