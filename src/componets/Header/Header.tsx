import React, {FC} from 'react';
import {Badge} from "react-bootstrap";

const Header: FC = () => {
    return (
        <div style={{justifyContent:'center', alignItems:"center",}}>
            <div style={{
                width: '50%',
                height: '150px',
                background: 'red',
                marginLeft: '300px',
                marginRight: '300px',
                borderRadius:'10%'
            }}>
                <h1>
                    The Movie  <Badge bg="secondary">Database</Badge>
                </h1>
                <div style={{justifyContent:'center', alignItems:"center",}}>
                    <p style={{margin: "10px"}}>login:M@xXx</p>
                </div>
            </div>
        </div>

    );
};

export {Header};