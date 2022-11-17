import React, {FC} from 'react';
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FilterMovie} from "../FilterMovie/FilterMovie";
import './Header.scss'

const Header: FC = () => {
    return (
        <div style={{justifyContent:'center', alignItems:"center",}}>
            <div style={{
                width: '50%',
                borderRadius:'10%',
                margin:'0 auto ',
                backgroundImage:"url(https://st.depositphotos.com/3216821/4196/i/600/depositphotos_41963323-stock-photo-35mm-film-negative-reflected-onto.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"auto"
            }}>
                <h1 style={{paddingLeft:'50px'}}>
                    The Movie  <Badge bg="secondary">Database</Badge>
                </h1>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <Link to={'tv'}>TV</Link>
                    <Link to={'/'} >Movies</Link>
                </div>
                <div style={{justifyContent:'center', alignItems:"center",}}>
                    <p style={{margin: "10px"}}>login:M@xXx</p>
                </div>
            <FilterMovie/>
            </div>
        </div>

    );
};

export {Header};