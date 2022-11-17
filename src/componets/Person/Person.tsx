import React, {FC, ReactNode} from 'react';

import {IMovie, IPerson} from "../../interfaces/interfaces";
import {Link} from "react-router-dom";

export  interface IpropsPerson {
    person:IPerson,
    children?:ReactNode
}
const Person:FC<IpropsPerson> = ({person}) => {
    // for (const person1 of person.known_for) {
    // }
    return (
        <div style={{
            display: 'flex',
            flexWrap:'wrap',
            // height:'250 px',
            border:'solid 2px black',
            //justifyContent: 'center',
            //alignItems: 'center',
            flexDirection:'column',
            width: '300px',
            margin:'20px'
        }}><Link to={`${person.id}`} state={person}>
            <img src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`} alt="person"/>
            <div>{person.name}</div>
        </Link>

        </div>
    );
};

export {Person};