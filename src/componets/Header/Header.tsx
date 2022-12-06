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
                <div style={{display:'flex',justifyContent:'space-around',marginBottom:'30px'}}>
                    <Link to={'tv'}><strong>ТВ Передачі</strong></Link>
                    <Link to={'/'} ><strong>Фільми</strong></Link>
                </div>
            <FilterMovie/>
                <div style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Link to={'upcoming'} ><strong>Незабаром появляться(Новинки) </strong></Link>
                </div>
            </div>
        </div>

    );
};

export {Header};